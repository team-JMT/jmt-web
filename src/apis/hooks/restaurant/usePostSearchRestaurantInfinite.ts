import { Keys } from '@apis/common/Keys';
import { searchMapRestaurantData } from '@apis/common/restaurant';
import { PostRestaurantSearchRequest } from '@apis/responses/Restaurant/PostMapSearchRestaurant';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPostSearchRestaurantData = async ({
  page,
  startLocation,
  endLocation,
  filter,
}: PostRestaurantSearchRequest) => {
  const res = await searchMapRestaurantData({
    page,
    startLocation,
    endLocation,
    filter,
  });
  return res.data;
};

export const usePostSearchRestaurantInfinite = ({
  page: { size = 10 },
  startLocation,
  endLocation,
  filter,
}: PostRestaurantSearchRequest) => {
  const { data, ...rest } = useInfiniteQuery(
    [Keys.RESTAURANT, startLocation, endLocation, filter],
    ({ pageParam = 0 }) =>
      fetchPostSearchRestaurantData({
        page: pageParam,
        startLocation,
        endLocation,
        filter,
      }),
    {
      getNextPageParam: (data) => {
        const { pageLast, currentPage } = data.data;

        if (!pageLast) {
          return currentPage + 1;
        }
      },
    },
  );
  return {
    restaurantData: data && data.pages,
    ...rest,
  };
};
