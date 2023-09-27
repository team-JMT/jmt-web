import { instance } from '@apis/common/Api';
import { Response } from '@apis/common/types';
import {
  GetCurrentLocationRequest,
  GetCurrentLocationResponse,
} from '@apis/responses/Location/GetCurrentLocation';
import {
  GetLocationSearchRequest,
  GetLocationSearchResponse,
} from '@apis/responses/Location/GetLocationSearch';

import { nativeInfo } from '@utils/storage';

export const getCurrentLocation = async (location: GetCurrentLocationRequest) =>
  await instance.get<Response<GetCurrentLocationResponse>>(
    '/api/v1/location/current',
    {
      params: {
        ...location,
      },
      headers: {
        Authorization: `Bearer ${nativeInfo.getData().accessToken}`,
      },
    },
  );

export const getLocationSearch = async (query: GetLocationSearchRequest) =>
  await instance.get<Response<GetLocationSearchResponse>>(
    '/api/v1/location/search',
    {
      params: {
        ...query,
      },
      headers: {
        Authorization: `Bearer ${nativeInfo.getData().accessToken}`,
      },
    },
  );
