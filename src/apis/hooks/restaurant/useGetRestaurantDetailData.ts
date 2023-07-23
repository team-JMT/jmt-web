import { Keys } from '@apis/common/Keys';
import { getRestaurantDetailData } from '@apis/common/restaurant';

import { useQuery } from '@tanstack/react-query';

const useGetRestaurantDetailData = (id?: number) => {
  const { data, error, ...rest } = useQuery(
    [Keys.RESTAURANT_DETAIL, id],
    () => getRestaurantDetailData(id!),
    { enabled: Boolean(id), suspense: true, staleTime: 20000 },
  );
  return {
    DetailData: data && data.data.data,
    DetailMessage: data && data.data.message,
    DetailError: error,
    ...rest,
  };
};

export default useGetRestaurantDetailData;
