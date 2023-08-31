import { Pagination } from '@apis/common/types';

import { LocationSearchData } from '../../../models/locationSearchData';

export type GetLocationSearchResponse = LocationSearchData[];

export type GetLocationSearchRequest = {
  query: string;
} & Pagination;
