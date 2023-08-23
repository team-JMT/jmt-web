import React from 'react';

import VConsole from 'vconsole';

import Router from './Routes/Router';
import { getAccessToken } from './utils/bridge';

function App() {
  getAccessToken();
  import.meta.env.MODE === 'development' && new VConsole();

  window.localStorage.setItem(
    'accessToken',
    'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiTUVNQkVSIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImV4cCI6MTY5MjA3MTk5NX0.c_n6M_ZItHc29DzlgHs6lIa9lakX_g-jQ_e8Jro51IHJH7e6gVnEoYd3hSWpj3_hu9sTHQ3dBS6VTtdPQAkcXQ',
  );

  return <Router />;
}

export default App;
