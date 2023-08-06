import { PageMeta, Response } from '@apis/common/types';

import { Restaurant } from '../../models/getRestaurantData';

export type GetRestaurantSearchResponse = Response<
  {
    content: Restaurant[];
  } & PageMeta
>;

export type GetRestaurantSearchRequest = {
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
