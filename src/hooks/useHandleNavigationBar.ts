import { useEffect } from 'react';

import { useStack } from '@stackflow/react';

import { navigationHandler } from '@utils/bridge';

export const useHandleNavigationBar = () => {
  const stack = useStack();
  const findActivity = stack.activities.filter(
    (activity) => activity.name === 'PlaceDetail' || activity.name === 'Report',
  );
  const checkIsTop = findActivity.some((activity) => activity.isTop);

  useEffect(() => {
    if (checkIsTop) {
      navigationHandler(false);
    } else {
      navigationHandler(true);
    }
  }, [checkIsTop]);
};
