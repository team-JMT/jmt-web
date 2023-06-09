import { Keys } from '@apis/common/Keys';
import { getRestaurantSearchData } from '@apis/common/restaurant';

import { useQuery } from '@tanstack/react-query';

export const useGetRestaurantSearchData = (keyword?: string) => {
  const { data, error, ...rest } = useQuery(
    [Keys.RESTAURANT_SEARCH, keyword],
    () => getRestaurantSearchData(keyword!),
    {
      enabled: Boolean(keyword),
      suspense: true,
    },
  );
  return {
    restaurantSearchData: data && data.data.data,
    restaurantSearchError: error,
    data,
    error,
    ...rest,
  };
};
