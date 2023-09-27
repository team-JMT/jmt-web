import { PageMeta } from '@apis/common/types';

import { Restaurant } from '../../../models/getRestaurantData';

export type GetRestaurantSearchResponse = {
  restaurants: Restaurant[];
  page: PageMeta;
};
export type GetRestaurantSearchRequest = {
  keyword: string;
  userLocation: {
    x: string;
    y: string;
  };
};
