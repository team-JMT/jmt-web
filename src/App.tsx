import React from 'react';

import VConsole from 'vconsole';

import Router from './Routes/Router';
import { getAccessToken } from './utils/bridge';

function App() {
  getAccessToken();
  // import.meta.env.MODE === 'development' && new VConsole();
  new VConsole();

  window.localStorage.setItem(
    'accessToken',
    'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiTUVNQkVSIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImV4cCI6MTY5MzgxMzg4MH0.k7qmFwT98_2HHN1_NOXSOu4VooQrw9tAqio1sLQOjnYaVBVRhibjo5666AThPx9dC12AwuI_kXktI_EL14sVqQ',
  );

  return <Router />;
}

export default App;
