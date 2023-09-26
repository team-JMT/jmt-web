import { useEffect, useRef } from 'react';

export const useConditionalOnceEffect = (
  callback: () => void,
  condition: boolean,
) => {
  const checkOnce = useRef(false);
  useEffect(() => {
    if (condition && !checkOnce.current) {
      checkOnce.current = true;
      callback();
    }
  }, [condition, callback]);
};
