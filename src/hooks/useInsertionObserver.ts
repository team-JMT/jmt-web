import { RefObject, useEffect, useState } from 'react';

interface UseInsertionObserverProps<T extends HTMLElement> {
  observeRef: RefObject<T>;
  onIntersect: (...args: any) => void;
}

export type UseIntersectionObserver<T extends HTMLElement> = (
  props: UseInsertionObserverProps<T>,
) => void;

export const useInsertionObserver = <T extends HTMLElement>({
  observeRef,
  onIntersect,
}: UseInsertionObserverProps<T>): void => {
  const [observeElement, setObserveElement] = useState<T | null>(
    observeRef.current,
  );

  useEffect(() => {
    if (observeElement) {
      const intersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting) {
            onIntersect();
          }
        },
      );
      intersectionObserver.observe(observeElement);

      return () => {
        intersectionObserver.unobserve(observeElement);
      };
    }
  }, [observeElement, onIntersect]);

  useEffect(() => {
    setObserveElement(observeRef.current);
  }, [observeRef]);
};
