import { Keys } from '@apis/common/Keys';
import { getLoginUserInfo } from '@apis/common/User';

import { useQuery } from '@tanstack/react-query';

const useGetLoginUserInfo = () => {
  const { data, ...rest } = useQuery(
    [Keys.LOGIN_USER_INFO],
    () => getLoginUserInfo(),
    { suspense: true },
  );
  return {
    UserData: data && data.data.data,
    ...rest,
  };
};

export default useGetLoginUserInfo;
