import React, { useEffect, useRef } from 'react';

import { usePostSearchRestaurantInfinite } from '@apis/hooks/restaurant/usePostSearchRestaurantInfinite';
import DownArrow from '@assets/icons/DownArrow';
import SadImage from '@assets/icons/SadImage';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
import IconNotice from '@commons/IconNotice';
import DrinkCategoryFilter from '@components/common/FilterBottomSheet/DrinkCategoryFilter';
import FoodCategoryFilter from '@components/common/FilterBottomSheet/FoodCategoryFilter';
import SortBy from '@components/common/FilterBottomSheet/SortBy';
import PlaceDetailCard from '@components/home/PlaceDetailCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { openBottomSheet } from '@store/bottomSheetAtom';
import {
  foodCategoryState,
  drinkCategoryState,
  SortKey,
  sortByState,
  getDrinkCategoryAtom,
  getFoodCategoryAtom,
} from '@store/filterAtom';
import { mapAtom } from '@store/mapAtom';
import { setPlacesAtom } from '@store/placesAtom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom, useAtomValue } from 'jotai';

import { useInsertionObserver } from '@hooks/useInsertionObserver';

const HomePlaceList = () => {
  const { push } = useHomeFlow();

  const handleOpenBottomSheet = useSetAtom(openBottomSheet);
  const observeRef = useRef<HTMLDivElement>(null);

  const lat = useAtomValue(mapAtom);
  const setPlaces = useSetAtom(setPlacesAtom);

  const isCanDrinkLiquor = useAtomValue(getDrinkCategoryAtom);
  const categoryFilter = useAtomValue(getFoodCategoryAtom);

  const { restaurantData, fetchNextPage, isEmpty, refetch } =
    usePostSearchRestaurantInfinite({
      startLocation: lat?.북동_좌표,
      endLocation: lat?.남서_좌표,
      filter: {
        categoryFilter: categoryFilter,
        isCanDrinkLiquor: isCanDrinkLiquor,
      },
      params: {
        page: 0,
        size: 10,
      },
    });

  const mappingRestaurantData = React.useMemo(
    () => restaurantData?.flatMap((page) => page.data.restaurants),
    [restaurantData],
  );

  const isLastPage = () => {
    if (!restaurantData) {
      return null;
    }

    return restaurantData[restaurantData.length - 1].data.page.pageLast;
  };

  const handleIntersect = () => {
    const isLast = isLastPage();
    if (isLast === null) {
      return;
    }
    if (!isLast) {
      fetchNextPage();
    }
  };
  // 무한 스크롤 로직
  useInsertionObserver<HTMLDivElement>({
    observeRef,
    onIntersect: handleIntersect,
  });

  useEffect(() => {
    if (!mappingRestaurantData) {
      return;
    }
    if (!Boolean(mappingRestaurantData[0]) || isEmpty) {
      return;
    }

    setPlaces(mappingRestaurantData);
  }, [mappingRestaurantData]);

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'ALL'}
    >
      <aside className={'see-all-filter'}>
        <Chip onClick={() => handleOpenBottomSheet('SORT_BY')}>
          {SortKey[sortState]}
          <DownArrow />
        </Chip>
        <div className={classNames('filter-divider', 'gray200')} />
        <FilterChip
          active={foodState !== undefined}
          onClick={() => handleOpenBottomSheet('FOOD_CATEGORY')}
        >
          종류
        </FilterChip>
        <FilterChip
          active={drinkState !== undefined}
          onClick={() => handleOpenBottomSheet('DRINK_CATEGORY')}
        >
          주류 여부
        </FilterChip>
      </aside>
      <section className={'place-detail-section'}>
        <>
          {isEmpty ? (
            <section className={'list-center'}>
              <IconNotice
                image={<SadImage />}
                text={
                  <span className={classNames('text-l-bold', 'gray300')}>
                    검색 결과가 없어요
                  </span>
                }
              />
            </section>
          ) : (
            <>
              {mappingRestaurantData &&
                mappingRestaurantData.map((data, _index) => (
                  <PlaceDetailCard
                    key={_index}
                    restaurant={data}
                    onClick={() =>
                      push('PlaceDetail', { placeId: String(data.id) })
                    }
                  />
                ))}
              {!isLastPage() && (
                <div className={'infinite-observe'} ref={observeRef} />
              )}
            </>
          )}
        </>
      </section>
      <SortBy />
      <FoodCategoryFilter />
      <DrinkCategoryFilter />
    </motion.div>
  );
};

export default HomePlaceList;
