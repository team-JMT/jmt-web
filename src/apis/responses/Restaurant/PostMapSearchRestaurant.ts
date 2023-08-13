import { PageMeta, Response } from '@apis/common/types';

import { Restaurant } from '../../../models/getRestaurantData';

export type PostRestaurantSearchRequest = {
  x: string;
  y: string;
  radius: number;
  filter: {
    categoryFilter: string;
    isCanDrinkLiquor: boolean;
  };
};
export type PostRestaurantSearchResponse = Response<
  {
    data: Restaurant[];
  } & PageMeta
>;
