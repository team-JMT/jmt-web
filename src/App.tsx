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
    'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5MzU0NjA2MX0.cfSVugwNjnCCl5H2qA-zb7EvAgkYaeKafclyTyGFPTodpR4FXqaCxsXEnw26bylY0jRtYKEddpuzAQDQ8_HCoQ',
  );

  return <Router />;
}

export default App;
