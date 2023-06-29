import { instance } from '@apis/common/Api';
import { Response, Pagination } from '@apis/common/types';
import { GetRestaurantDataResponse } from '@apis/responses/Restaurant';
import type { AxiosResponse } from 'axios';

import { RestaurantDetail } from '../../../models/restaurantDetail';

export const getRestaurantData = async (params: Pagination) =>
  await instance.get<AxiosResponse<GetRestaurantDataResponse>>(
    '/api/v1/restaurant',
    {
      params,
    },
  );

export const getRestaurantDetailData = async (id: number) =>
  await instance.get<Response<RestaurantDetail>>('/api/v1/restaurant/' + id);

export const getRestaurantSearchData = async (keyword: string) =>
  await instance.get<AxiosResponse<GetRestaurantDataResponse>>(
    `/api/v1/restaurant/search`,
    {
      params: {
        keyword,
      },
    },
  );
