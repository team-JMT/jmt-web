import { PageMeta, Response } from '@apis/types';

import { Restaurant } from '../../models/getRestaurantData';

export type GetRestaurantDataResponse = Response<{
  restaurant: Restaurant[];
  page: PageMeta;
}>;
