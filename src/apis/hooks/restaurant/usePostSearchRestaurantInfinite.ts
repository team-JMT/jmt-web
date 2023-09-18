import { Keys } from '@apis/common/Keys';
import { searchMapRestaurantData } from '@apis/common/restaurant';
import { PostRestaurantSearchRequest } from '@apis/responses/Restaurant/PostMapSearchRestaurant';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPostSearchRestaurantData = async ({
  params: { page = 0 },
  startLocation,
  endLocation,
  filter,
}: PostRestaurantSearchRequest) => {
  const res = await searchMapRestaurantData({
    params: {
      page,
    },
    startLocation,
    endLocation,
    filter,
  });
  return res.data;
};

export const usePostSearchRestaurantInfinite = ({
  params,
  startLocation,
  endLocation,
  filter,
}: PostRestaurantSearchRequest) => {
  const { data, ...rest } = useInfiniteQuery(
    [Keys.RESTAURANT, startLocation, endLocation, filter],
    ({ pageParam = 0 }) =>
      fetchPostSearchRestaurantData({
        params: { page: pageParam },
        startLocation,
        endLocation,
        filter,
      }),
    {
      enabled: Boolean(startLocation && endLocation),
      getNextPageParam: (data) => {
        const { pageLast, currentPage } = data.data.page;
        if (!pageLast) {
          return currentPage + 1;
        }
      },
    },
  );
  return {
    restaurantData: data && data.pages,
    isEmpty: data && data.pages[0].data.page.empty,
    ...rest,
  };
};
