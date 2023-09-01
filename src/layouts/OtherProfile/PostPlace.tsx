import React, { useEffect, useRef } from 'react';

import { useGetRestaurantByUser } from '@apis/hooks/restaurant/useGetRestaurantByUser';
//import { useGetRestaurantDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantDataInfinite';
import DownArrow from '@assets/icons/DownArrow';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
import DrinkCategoryFilter from '@components/common/FilterBottomSheet/DrinkCategoryFilter';
import FoodCategoryFilter from '@components/common/FilterBottomSheet/FoodCategoryFilter';
import SortBy from '@components/common/FilterBottomSheet/SortBy';
import SearchResultCard from '@components/SearchResult/SearchResultCard';
import { openBottomSheet } from '@store/bottomSheetAtom';
import {
  foodCategoryState,
  drinkCategoryState,
  SortKey,
  sortByState,
} from '@store/filterAtom';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';

import { useInsertionObserver } from '@hooks/useInsertionObserver';

const PostPlace = () => {
  const handleOpenBottomSheet = useSetAtom(openBottomSheet);
  // const observeRef = useRef<HTMLDivElement>(null);

  // const { restaurantData, fetchNextPage, isFetchingNextPage, isEmpty } =
  //   useGetRestaurantByUser({
  //     userLocation: {
  //       x: '127.0596',
  //       y: '37.6633',
  //     },
  //     filter: {
  //       categoryFilter: '',
  //       isCanDrinkLiquor: true,
  //     },
  //     params: {
  //       page: 0,
  //       size: 10,
  //     },
  //   });

  // const mappingRestaurantData = React.useMemo(
  //   () => restaurantData?.flatMap((page) => page.data.restaurant),
  //   [restaurantData],
  // );
  // console.log('isEmpty', isEmpty);

  // const isLastPage = () => {
  //   if (!restaurantData) {
  //     return null;
  //   }

  //   return restaurantData[0].data.page.pageLast;
  // };

  // const handleIntersect = () => {
  //   const isLast = isLastPage();
  //   if (isLast === null) {
  //     return;
  //   }
  //   if (!isLast) {
  //     fetchNextPage();
  //   }
  // };
  // // 무한 스크롤 로직
  // useInsertionObserver<HTMLDivElement>({
  //   observeRef,
  //   onIntersect: handleIntersect,
  // });

  // useEffect(() => {
  //   console.log('mappingRestaurantData', mappingRestaurantData);
  //   if (!mappingRestaurantData) {
  //     return;
  //   }
  //   if (!Boolean(mappingRestaurantData[0]) || isEmpty) {
  //     return;
  //   }

  //   setPlaces(mappingRestaurantData);
  // }, [mappingRestaurantData]);

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);
  //console.log(restaurantData);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'ALL'}
    >
      {/* <section className={'place-detail-section'}>
        {mappingRestaurantData &&
          mappingRestaurantData.map((data, index) => (
            <SearchResultCard restaurantInfo={data} key={index} />
          ))}
        {!isLastPage() && (
          <div className={'infinite-observe'} ref={observeRef} />
        )}
      </section> */}
    </motion.div>
  );
};

export default PostPlace;
