import React from 'react';

import VConsole from 'vconsole';

import { getAccessToken, getUserPosition } from '@utils/bridge';

import Router from './Routes/Router';

function App() {
  getAccessToken();
  getUserPosition();

  import.meta.env.MODE === 'development' && new VConsole();
  window.localStorage.setItem(
    'accessToken',
    'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiTUVNQkVSIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImV4cCI6MTY5MzkxNDA2N30.PZ3AMVcZmNn7hJvAYJOJMx4L2LFEHTe4G47iILNTdIs8V92QRd7UW8QFAk9jUU_iu0HKdptPpP6wjo9lj_It2w',
  );

  return <Router />;
}

export default App;
