import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 30,
      cacheTime: 60 * 60 * 24,
    },
  },
});
