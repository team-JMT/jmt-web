import { instance } from '@apis/common/Api';
import { Pagination, Response } from '@apis/common/types';
import {
  RestaurantByUserRequest,
  RestaurantByUserResponse,
} from '@apis/responses/Restaurant/GetRestaurantByUser';
import { GetRestaurantDataResponse } from '@apis/responses/Restaurant/GetRestaurantData';
import { GetRestaurantSearchResponse } from '@apis/responses/Restaurant/GetRestaurantSearch';
import {
  PostRestaurantSearchRequest,
  PostRestaurantSearchResponse,
} from '@apis/responses/Restaurant/PostMapSearchRestaurant';
import qs from 'qs';

import { RestaurantDetail } from '../../../models/getRestaurantDetail';

export const getRestaurantData = async (params: Pagination) =>
  await instance.get<Response<GetRestaurantDataResponse>>(
    '/api/v1/restaurant',
    {
      params,
    },
  );

export const searchMapRestaurantData = async ({
  params,
  ...rest
}: PostRestaurantSearchRequest) =>
  await instance.post<Response<PostRestaurantSearchResponse>>(
    `/api/v1/restaurant/search/map?${qs.stringify(params)}`,
    rest,
  );

export const getRestaurantByUser = async ({
  params,
  ...rest
}: RestaurantByUserRequest) =>
  await instance.post<Response<RestaurantByUserResponse>>(
    `/api/v1/restaurant/search/18?${qs.stringify(params)}`, //+ id,
    rest,
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
