import { useEffect, useState } from 'react';

interface UseInsertionObserverProps<T extends HTMLElement> {
  onIntersect: (...args: any) => void;
}

export const useInsertionObserver = <T extends HTMLElement>({
  onIntersect,
}: UseInsertionObserverProps<T>): {
  setObserveElement: React.Dispatch<React.SetStateAction<T | null>>;
} => {
  const [observeElement, setObserveElement] = useState<T | null>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    });
  };

  useEffect(() => {
    if (!observeElement) {
      return;
    }
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });

    observer.observe(observeElement);

    return () => observer.unobserve(observeElement);
  }, [observeElement, onIntersect]);

  return {
    setObserveElement,
  };
};
