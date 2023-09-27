import { instance } from '@apis/common/Api';
import { Response } from '@apis/common/types';

import { nativeInfo } from '@utils/storage';

import { UserInfo } from '../../models/getUserInfo';

export const getUserInfo = async (id: number) =>
  await instance.get<Response<UserInfo>>('/api/v1/user/info/' + id, {
    headers: {
      Authorization: `Bearer ${nativeInfo.getData().accessToken}`,
    },
  });

export const getLoginUserInfo = async () =>
  await instance.get<Response<UserInfo>>('/api/v1/user/info', {
      headers: {
          Authorization: `Bearer ${nativeInfo.getData().accessToken}`,
      },
  });
