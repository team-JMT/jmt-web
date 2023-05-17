import { PageMeta, Response } from '@apis/common/types';

import { Restaurant } from '../../models/getRestaurantData';

export type GetRestaurantDataResponse = Response<{
  restaurant: Restaurant[];
  page: PageMeta;
}>;
