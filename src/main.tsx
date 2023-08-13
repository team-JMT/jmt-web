import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavermapsProvider } from 'react-naver-maps';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@apis/queryClient';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import '@styles/_normalize.scss';
import '@styles/common/_index.scss';
import '@styles/pages/_index.scss';
import '@styles/theme/_index.scss';

import '@stackflow/plugin-basic-ui/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavermapsProvider ncpClientId="4mc8nybxwl">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NavermapsProvider>
  </React.StrictMode>,
);
