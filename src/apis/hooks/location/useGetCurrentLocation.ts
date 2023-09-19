import { getCurrentLocation } from '@apis/common/Address';
import { Keys } from '@apis/common/Keys';
import { GetCurrentLocationRequest } from '@apis/responses/Location/GetCurrentLocation';

import { useQuery } from '@tanstack/react-query';

export const useGetCurrentLocation = (params?: GetCurrentLocationRequest) => {
  const { data, ...rest } = useQuery(
    [Keys.CURRENT_LOCATION, params],
    () => getCurrentLocation(params!),
    {
      enabled: Boolean(params?.x && params?.y),
    },
  );
  return {
    currentLocationData: data && data.data.data,
    ...rest,
  };
};
