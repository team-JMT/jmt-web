import { PageMeta, Response } from '@apis/common/types';

import { Restaurant } from '../../models/getRestaurantData';

export type GetRestaurantSearchResponse = Response<
  {
    content: Restaurant[];
  } & PageMeta
>;
