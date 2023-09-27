import { useEffect } from 'react';

import { useCheckTopActivity } from '@hooks/useCheckTopActivity';

import { navigationHandler } from '@utils/bridge';

export const useHandleNavigationBar = () => {
  const isPlaceDetail = useCheckTopActivity('PlaceDetail');

  useEffect(() => {
    if (isPlaceDetail) {
      navigationHandler(false);
    } else {
      navigationHandler(true);
    }
  }, [isPlaceDetail]);
};
