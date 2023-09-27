import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavermapsProvider } from 'react-naver-maps';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@apis/queryClient';
import VConsole from 'vconsole';

import { getAccessToken, getUserPosition } from '@utils/bridge';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App';
import '@styles/_normalize.scss';
import '@styles/common/_index.scss';
import '@styles/pages/_index.scss';
import '@styles/theme/_index.scss';

import '@stackflow/plugin-basic-ui/index.css';

function init() {
  getAccessToken();
  getUserPosition();
  import.meta.env.MODE === 'development' && new VConsole();
  try {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <NavermapsProvider
          ncpClientId={import.meta.env.VITE_CONFIG_NAVER_CLIENT_ID}
        >
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </NavermapsProvider>
      </React.StrictMode>,
    );
  } catch (e) {
    console.info(e);
  }
}

init();
