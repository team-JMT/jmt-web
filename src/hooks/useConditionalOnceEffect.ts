import { DependencyList, useEffect, useRef } from 'react';

export const useConditionalOnceEffect = (
  callback: () => void,
  condition?: DependencyList,
) => {
  const checkOnce = useRef(false);
  useEffect(() => {
    if (!checkOnce.current) {
      checkOnce.current = true;
      callback();
    }
  }, condition);
};
