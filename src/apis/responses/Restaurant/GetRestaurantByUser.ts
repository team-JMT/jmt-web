import { PageMeta, Pagination } from '@apis/common/types';

import { Restaurant } from '../../../models/getRestaurantData';

export type RestaurantByUserRequest = {
  params: Pagination;
  userId: number;
  userLocation: {
    x?: string;
    y?: string;
  };
  filter: {
    categoryFilter?: string;
    isCanDrinkLiquor?: boolean;
  };
};
export type RestaurantByUserResponse = {
  restaurants: Restaurant[];
  page: PageMeta;
};
