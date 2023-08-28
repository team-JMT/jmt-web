import { getLocationSearch } from '@apis/common/Address';
import { Keys } from '@apis/common/Keys';
import { GetLocationSearchRequest } from '@apis/responses/Location/GetLocationSearch';

import { useQuery } from '@tanstack/react-query';

export const useGetLocationSearch = ({
  query,
  page = 1,
}: Partial<GetLocationSearchRequest>) => {
  const { data, ...rest } = useQuery(
    [Keys.LOCATION_SEARCH, query, page],
    () =>
      getLocationSearch({
        query: query!,
        page,
      }),
    {
      suspense: true,
      enabled: Boolean(query),
    },
  );

  return {
    locationSearchData: data && data.data.data,
    ...rest,
  };
};
