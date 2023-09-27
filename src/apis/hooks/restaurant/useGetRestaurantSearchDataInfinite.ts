import { Keys } from '@apis/common/Keys';
import { getRestaurantSearchData } from '@apis/common/restaurant';
import { GetRestaurantSearchRequest } from '@apis/responses/Restaurant/GetRestaurantSearch';

import { useInfiniteQuery } from '@tanstack/react-query';

const fetchRestaurantSearch = async (params: GetRestaurantSearchRequest) => {
  const res = await getRestaurantSearchData(params);
  return res.data;
};

export const useGetRestaurantSearchDataInfinite = ({
  keyword,
  userLocation,
}: GetRestaurantSearchRequest) => {
  const { data, error, ...rest } = useInfiniteQuery(
    [Keys.RESTAURANT_SEARCH, keyword, userLocation],
    ({ pageParam }) =>
      fetchRestaurantSearch({
        keyword,
        userLocation,
      }),
    {
      getNextPageParam: (data) => {
        if (!data.data.page.pageLast) {
          return data.data.page.currentPage + 1;
        }
      },
      enabled: Boolean(keyword && userLocation),
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
