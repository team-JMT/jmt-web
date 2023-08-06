import { instance } from '@apis/common/Api';
import { Pagination, Response } from '@apis/common/types';
import { GetRestaurantSearchRequest } from '@apis/responses/GetRestaurantSearch';
import { GetRestaurantDataResponse } from '@apis/responses/Restaurant';

import { RestaurantDetail } from '../../../models/restaurantDetail';

export const getRestaurantData = async (params: Pagination) =>
  await instance.get<Response<GetRestaurantDataResponse>>(
    '/api/v1/restaurant',
    {
      params,
    },
  );

export const searchRestaurantData = async (
  params: GetRestaurantSearchRequest,
) =>
  await instance.post<Response<GetRestaurantDataResponse>>(
    '/api/v1/restaurant/search',
    params,
  );

export const getRestaurantDetailData = async (id: number) =>
  await instance.get<Response<RestaurantDetail>>('/api/v1/restaurant/' + id);

export const getRestaurantSearchData = async (keyword: string) =>
  await instance.get<Response<GetRestaurantDataResponse>>(
    `/api/v1/restaurant/search`,
    {
      params: {
        keyword,
      },
    },
  );
