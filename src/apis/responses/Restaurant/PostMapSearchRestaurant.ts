import { PageMeta, Pagination } from '@apis/common/types';

import { Restaurant } from '../../../models/getRestaurantData';

export type PostRestaurantSearchRequest = {
  startLocation: {
    x?: string;
    y?: string;
  };
  endLocation: {
    x?: string;
    y?: string;
  };
  filter: {
    categoryFilter?: string;
    isCanDrinkLiquor?: boolean;
  };
  params: Pagination;
};
export type PostRestaurantSearchResponse = {
  restaurant: Restaurant[];
  page: PageMeta;
};
