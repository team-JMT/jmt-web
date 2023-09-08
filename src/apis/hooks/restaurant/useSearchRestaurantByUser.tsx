import { Keys } from '@apis/common/Keys';
import { searchRestaurantByUser } from '@apis/common/restaurant';
import { RestaurantByUserRequest } from '@apis/responses/Restaurant/GetRestaurantByUser';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchSearchRestaurantByUser = async ({
  params: { page = 0 },
  userId,
  userLocation,
  filter,
}: RestaurantByUserRequest) => {
  const res = await searchRestaurantByUser({
    params: {
      page,
    },
    userId,
    userLocation,
    filter,
  });

  return res.data;
};

export const useSearchRestaurantByUser = ({
  params,
  userId,
  userLocation,
  filter,
}: RestaurantByUserRequest) => {
  const { data, ...rest } = useInfiniteQuery(
    [Keys.USER_RESTAURANT, userLocation, filter],
    ({ pageParam = 0 }) =>
      fetchSearchRestaurantByUser({
        params,
        userId,
        userLocation,
        filter,
      }),
    {
      getNextPageParam: (data) => {
        const { pageLast, currentPage } = data.data.page;
        if (!pageLast) {
          return currentPage + 1;
        }
      },
      suspense: true,
    },
  );
  return {
    restaurantData: data && data.pages,
    isEmpty: data && data.pages[0].data.page.empty,
    ...rest,
  };
};
