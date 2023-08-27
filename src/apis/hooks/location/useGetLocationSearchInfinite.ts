import { getLocationSearch } from '@apis/common/Address';
import { Keys } from '@apis/common/Keys';
import { GetLocationSearchRequest } from '@apis/responses/Location/GetLocationSearch';

import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetLocationSearchInfinite = ({
  query,
  page = 1,
}: Partial<GetLocationSearchRequest>) => {
  const { data, ...rest } = useInfiniteQuery(
    [Keys.LOCATION_SEARCH, query, page],
    () =>
      getLocationSearch({
        query: query!,
        page,
      }),
    {
      // getNextPageParam: (data) => {
      //   const { pageLast, currentPage } = data.data.data;
      //
      //   if (!pageLast) {
      //     return currentPage + 1;
      //   }
      //   return undefined;
      // },
      suspense: true,
      enabled: Boolean(query),
    },
  );

  return {
    locationSearchData: data && data.pages,
    ...rest,
  };
};
