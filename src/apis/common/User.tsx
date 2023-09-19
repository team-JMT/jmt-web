import { instance } from '@apis/common/Api';
import { Response } from '@apis/common/types';

import { UserInfo } from '../../models/getUserInfo';

export const getUserInfo = async (id: number) =>
  await instance.get<Response<UserInfo>>('/api/v1/user/info/' + id);
