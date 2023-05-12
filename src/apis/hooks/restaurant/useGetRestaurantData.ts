import { Keys } from '@apis/common/Keys';
import { getRestaurantData } from '@apis/common/restaurant';
import { Pagination } from '@apis/common/types';

import { useQuery } from '@tanstack/react-query';

export const useGetRestaurantData = ({
  page = 0,
  size = 10,
  sort,
}: Pagination) => {
  const { data, ...rest } = useQuery(
    [Keys.RESTAURANT, page, size, sort],
    () =>
      getRestaurantData({
        page,
        size,
        sort,
      }),
    {},
  );
};
