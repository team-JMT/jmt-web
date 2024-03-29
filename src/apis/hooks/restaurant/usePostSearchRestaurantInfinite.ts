import { Keys } from '@apis/common/Keys';
import { searchMapRestaurantData } from '@apis/common/restaurant';
import { PostRestaurantSearchRequest } from '@apis/responses/Restaurant/PostMapSearchRestaurant';

import { useInfiniteQuery } from '@tanstack/react-query';

type Enable = {
  enable?: boolean;
};
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
  enable = false,
}: PostRestaurantSearchRequest & Enable) => {
  const { data, ...rest } = useInfiniteQuery(
    [Keys.RESTAURANT, params, filter],
    ({ pageParam = 0 }) =>
      fetchPostSearchRestaurantData({
        params: {
          ...params,
          page: pageParam,
        },
        startLocation,
        endLocation,
        filter,
      }),
    {
      enabled: Boolean(startLocation.x) && Boolean(endLocation.y) && enable,
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
