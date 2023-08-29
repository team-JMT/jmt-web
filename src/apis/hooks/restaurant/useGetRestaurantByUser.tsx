import { Keys } from '@apis/common/Keys';
import { RestaurantByUser, getRestaurantByUser } from '@apis/common/restaurant';
import { Pagination } from '@apis/common/types';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchGetRestaurantData = async ({ page, size, sort }: Pagination) => {
  const res = await getRestaurantByUser({
    page,
    size,
    sort,
  });
  return res.data;
};

export const useGetRestaurantByUser = ({
  page = 0,
  size = 10,
  sort,
}: Pagination) => {
  const { data, ...rest } = useInfiniteQuery(
    [Keys.RESTAURANT, page, size, sort],
    ({ pageParam = 0 }) =>
      fetchGetRestaurantData({
        page: pageParam,
        size,
        sort,
      }),
    {
      getNextPageParam: (data) => {
        const { currentPage, totalPage } = data.data.page;

        if (currentPage < totalPage) {
          return currentPage + 1;
        }
        return undefined;
      },
      suspense: true,
    },
  );
  return {
    restaurantData: data && data.pages,
    ...rest,
  };
};
