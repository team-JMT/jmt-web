import { instance } from '@apis/common/Api';
import { Pagination, Response } from '@apis/common/types';
import { GetRestaurantDataResponse } from '@apis/responses/Restaurant/GetRestaurantData';
import { GetRestaurantSearchResponse } from '@apis/responses/Restaurant/GetRestaurantSearch';
import {
  PostRestaurantSearchRequest,
  PostRestaurantSearchResponse,
} from '@apis/responses/Restaurant/PostMapSearchRestaurant';

import { RestaurantDetail } from '../../../models/restaurantDetail';

export const getRestaurantData = async (params: Pagination) =>
  await instance.get<Response<GetRestaurantDataResponse>>(
    '/api/v1/restaurant',
    {
      params,
    },
  );

export const searchMapRestaurantData = async (
  params: PostRestaurantSearchRequest,
) =>
  await instance.post<Response<PostRestaurantSearchResponse>>(
    '/api/v1/restaurant/search',
    params,
  );

export const getRestaurantDetailData = async (id: number) =>
  await instance.get<Response<RestaurantDetail>>('/api/v1/restaurant/' + id);

export const getRestaurantSearchData = async (keyword: string) =>
  await instance.get<Response<GetRestaurantSearchResponse>>(
    `/api/v1/restaurant/search`,
    {
      params: {
        keyword,
      },
    },
  );
