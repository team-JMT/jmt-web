import { useStack } from '@stackflow/react';

export const useCheckTopActivity = (activityName: string) => {
  const stack = useStack();
  const findActivity = stack.activities.find(
    (activity) => activity.name === activityName,
  );
  return findActivity && findActivity.isTop;
};
