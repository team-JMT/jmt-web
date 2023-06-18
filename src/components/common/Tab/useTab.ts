import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const TabContext = createContext<
  | {
      tabID: string;
      value: {
        id: string;
        label: string;
      };
      setValue: Dispatch<SetStateAction<{ id: string; label: string }>>;
    }
  | undefined
>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return { ...context };
};
