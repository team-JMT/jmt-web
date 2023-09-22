import React, { useRef } from 'react';

import { useSearchRestaurantByUserInfinite } from '@apis/hooks/restaurant/useSearchRestaurantByUserInfinite';
import SearchResultCard from '@components/searchResult/SearchResultCard';
import {
  foodCategoryState,
  drinkCategoryState,
  sortByState,
  drinkToBoolean,
} from '@store/filterAtom';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';

import { useInsertionObserver } from '@hooks/useInsertionObserver';

interface UserIdProp {
  userId: number;
}
const PostPlace = ({ userId }: UserIdProp) => {
  const Id = userId.toString();
  const observeRef = useRef<HTMLDivElement>(null);

  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);

  const { restaurantData, fetchNextPage, isFetchingNextPage, isEmpty } =
    useSearchRestaurantByUserInfinite({
      userId: Id,
      userLocation: {
        x: '127.0596',
        y: '37.6633',
      },
      filter: {
        categoryFilter: foodState,
        isCanDrinkLiquor: drinkToBoolean(drinkState),
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

    return restaurantData[0].data.page.pageLast;
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
  const { setObserveElement } = useInsertionObserver<HTMLDivElement>({
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
      <section className={'place-detail-section'}>
        <>
          {isEmpty ? (
            <div>api 호출 결과가 비어있어요</div>
          ) : (
            <>
              {mappingRestaurantData &&
                mappingRestaurantData.map((data, index) => (
                  <SearchResultCard restaurantInfo={data} key={index} />
                ))}
              {!isLastPage() && (
                <div className={'infinite-observe'} ref={setObserveElement} />
              )}
            </>
          )}
        </>
      </section>
    </motion.div>
  );
};

export default PostPlace;
