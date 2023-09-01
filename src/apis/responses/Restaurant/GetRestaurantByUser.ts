import { PageMeta, Pagination } from '@apis/common/types';

import { Restaurant } from '../../../models/getRestaurantData';

export type RestaurantByUserRequest = {
  userLocation: {
    x?: string;
    y?: string;
  };
  filter: {
    categoryFilter?: string;
    isCanDrinkLiquor?: boolean;
  };
  params: Pagination;
};
export type RestaurantByUserResponse = {
  restaurants: Restaurant[];
  page: PageMeta;
};
