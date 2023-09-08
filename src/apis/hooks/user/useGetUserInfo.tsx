import { Keys } from '@apis/common/Keys';
import { getUserInfo } from '@apis/common/User';

import { useQuery } from '@tanstack/react-query';

const useGetUserInfo = (id: number) => {
  const { data, ...rest } = useQuery(
    [Keys.USER_INFO, id],
    () => getUserInfo(id),
    { enabled: Boolean(id), suspense: true },
  );
  return {
    UserData: data && data.data.data,
    ...rest,
  };
};

export default useGetUserInfo;
