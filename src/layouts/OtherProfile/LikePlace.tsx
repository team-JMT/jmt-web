import React, { useRef } from 'react';

import { useGetRestaurantDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantDataInfinite';
import DownArrow from '@assets/icons/DownArrow';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
import DrinkCategoryFilter from '@components/common/FilterBottomSheet/DrinkCategoryFilter';
import FoodCategoryFilter from '@components/common/FilterBottomSheet/FoodCategoryFilter';
import SearchResultCard from '@components/SearchResult/SearchResultCard';
import { openBottomSheet } from '@store/bottomSheetAtom';
import { foodCategoryState, drinkCategoryState } from '@store/filterAtom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';

import { useInsertionObserver } from '@hooks/useInsertionObserver';

const LikePlace = () => {
  const handleOpenBottomSheet = useSetAtom(openBottomSheet);
  const observeRef = useRef<HTMLDivElement>(null);

  const { restaurantData, fetchNextPage, isFetchingNextPage } =
    useGetRestaurantDataInfinite({
      page: 0,
      size: 10,
    });

  const mappingRestaurantData = React.useMemo(
    () => restaurantData?.flatMap((page) => page.data.restaurants),
    [restaurantData],
  );

  const isLastPage = () => {
    if (!restaurantData) {
      return null;
    }
    return (
      restaurantData[0].data.page.currentPage ===
      restaurantData[0].data.page.totalPage
    );
  };

  const handleIntersect = () => {
    const isLast = isLastPage();
    if (isLast === null) {
      return;
    }
    if (!isLast) {
      fetchNextPage();
      //console.log('intersect');
    }
  };
  // 무한 스크롤 로직
  useInsertionObserver<HTMLDivElement>({
    observeRef,
    onIntersect: handleIntersect,
  });

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);

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
          가까운 순
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
        {mappingRestaurantData &&
          mappingRestaurantData.map((data) => (
            <SearchResultCard restaurantInfo={data} key={data.id} />
          ))}
        {!isLastPage() && (
          <div className={'infinite-observe'} ref={observeRef} />
        )}
      </section>
      <FoodCategoryFilter />
      <DrinkCategoryFilter />
    </motion.div>
  );
};

export default LikePlace;
