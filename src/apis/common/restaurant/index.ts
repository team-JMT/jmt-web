import { instance } from '@apis/common/Api';
import { Pagination } from '@apis/common/types';
import { GetRestaurantDataResponse } from '@apis/responses/Restaurant';
import { AxiosResponse } from 'axios';

export const getRestaurantData = async (params: Pagination) =>
  await instance.get<AxiosResponse<GetRestaurantDataResponse>>(
    '/api/v1/restaurant',
    {
      params,
    },
  );
