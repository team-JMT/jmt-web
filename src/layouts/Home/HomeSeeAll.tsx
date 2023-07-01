import React, { useRef } from 'react';

import { useGetRestaurantDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantDataInfinite';
import DownArrow from '@assets/icons/DownArrow';
import Chip from '@commons/Chip';
import FilterChip from '@commons/FilterChip';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { useInsertionObserver } from '@hooks/useInsertionObserver';

const HomeSeeAll = () => {
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
      return;
    }
    return restaurantData[0].data.page.pageLast;
  };

  const handleIntersect = () => {
    if (isLastPage()) {
      fetchNextPage();
      console.log('intersect');
    }
  };
  // 무한 스크롤 로직
  useInsertionObserver<HTMLDivElement>({
    observeRef,
    onIntersect: handleIntersect,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className={'home-tab-container'}
      key={'ALL'}
    >
      <aside className={'see-all-filter'}>
        <Chip>
          가까운 순
          <DownArrow />
        </Chip>
        <div className={classNames('filter-divider', 'gray200')} />
        <FilterChip>종류</FilterChip>
        <FilterChip>주류 여부</FilterChip>
      </aside>
      <div>
        {mappingRestaurantData &&
          mappingRestaurantData.map((data) => <div>{data.name}</div>)}
        {!isLastPage() && (
          <div className={'infinite-observe'} ref={observeRef} />
        )}
      </div>
    </motion.div>
  );
};

export default HomeSeeAll;
