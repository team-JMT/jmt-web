import { PageMeta } from '@apis/common/types';

import { Restaurant } from '../../models/getRestaurantData';

export type GetRestaurantDataResponse = {
  restaurants: Restaurant[];
  page: PageMeta;
};
