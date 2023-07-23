import { Keys } from '@apis/common/Keys';
import { getRestaurantSearchData } from '@apis/common/restaurant';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchRestaurantSearch = async (keyword: string) => {
  const res = await getRestaurantSearchData(keyword);
  return res.data;
};

export const useGetRestaurantSearchDataInfinite = (keyword?: string) => {
  const { data, error, ...rest } = useInfiniteQuery(
    [Keys.RESTAURANT_SEARCH, keyword],
    ({ pageParam }) => fetchRestaurantSearch(keyword!),
    {
      getNextPageParam: (data) => {
        const { currentPage, totalPage } = data.data.page;

        if (currentPage < totalPage) {
          return currentPage + 1;
        }
        return undefined;
      },
      enabled: Boolean(keyword),
      suspense: true,
    },
  );
  return {
    restaurantSearchData: data && data.pages,
    restaurantSearchError: error,
    data,
    error,
    ...rest,
  };
};
