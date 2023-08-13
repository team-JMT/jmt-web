import { PageMeta, Response } from '@apis/common/types';

import { Restaurant } from '../../../models/getRestaurantData';

export type PostRestaurantSearchRequest = {
  startLocation: {
    x: string;
    y: string;
  };
  endLocation: {
    x: string;
    y: string;
  };
  filter: {
    categoryFilter?: string;
    isCanDrinkLiquor?: boolean;
  };
  page: PageMeta;
};
export type PostRestaurantSearchResponse = Response<
  {
    data: Restaurant[];
  } & PageMeta
>;
