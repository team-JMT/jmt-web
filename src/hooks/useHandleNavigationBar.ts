import { useStack } from '@stackflow/react';

import { navigationHandler } from '@utils/bridge';

export const useHandleNavigationBar = () => {
  const stack = useStack();
  const isPlaceDetail = stack.activities.find(
    (activity) => activity.name === 'PlaceDetail',
  );
  if (isPlaceDetail) {
    navigationHandler(false);
  } else {
    navigationHandler(true);
  }
};
