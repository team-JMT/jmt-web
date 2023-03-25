import React from 'react';
import ReactDOM from 'react-dom/client';

import VConsole from 'vconsole';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import '@styles/colors.scss';
import '@styles/fontStyle.scss';
import '@styles/typography.scss';
import '@styles/_normalize.scss';

const queryClient = new QueryClient();

const vConsole = new VConsole();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
