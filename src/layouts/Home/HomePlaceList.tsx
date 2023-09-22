import React, { useEffect } from 'react';

import DownArrow from '@assets/icons/DownArrow';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
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
} from '@store/filterAtom';
import { setPlacesAtom } from '@store/placesAtom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';

import { useInsertionObserver } from '@hooks/useInsertionObserver';
import { usePostSearchDataWithParam } from '@hooks/usePostSearchDataWithParam';

const HomePlaceList = () => {
  const { push } = useHomeFlow();
  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);
  const handleOpenBottomSheet = useSetAtom(openBottomSheet);
  const { restaurantData, fetchNextPage, hasNextPage, isEmpty, handleEnable } =
    usePostSearchDataWithParam();

  const setPlaces = useSetAtom(setPlacesAtom);

  const mappingRestaurantData = restaurantData?.flatMap(
    (page) => page.data.restaurants,
  );

  const handleIntersect = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };
  // 무한 스크롤 로직
  const { setObserveElement } = useInsertionObserver<HTMLDivElement>({
    onIntersect: handleIntersect,
  });

  useEffect(() => {
    if (mappingRestaurantData) {
      setPlaces(mappingRestaurantData);
    }
  }, [mappingRestaurantData]);

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
          active={foodState !== ''}
          onClick={() => handleOpenBottomSheet('FOOD_CATEGORY')}
        >
          종류
        </FilterChip>
        <FilterChip
          active={drinkState !== ''}
          onClick={() => handleOpenBottomSheet('DRINK_CATEGORY')}
        >
          주류 여부
        </FilterChip>
      </aside>
      <section className={'place-detail-section'}>
        <>
          {isEmpty ? (
            <div>비어있어요.</div>
          ) : (
            <>
              {mappingRestaurantData && (
                <>
                  {mappingRestaurantData.map((data, _index) => (
                    <PlaceDetailCard
                      key={_index}
                      restaurant={data}
                      onClick={() =>
                        push('PlaceDetail', { placeId: String(data.id) })
                      }
                    />
                  ))}
                </>
              )}
              <div className={'infinite-observe'} ref={setObserveElement} />
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
