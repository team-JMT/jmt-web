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
    'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5MzEyMjUzNH0.9bBHRruWQDs_SGG0mNQHcxvrdeLGQgdvn9Le7J_CmLt4x-i9e7EwEs4ZRTnE6MyMlt6P19lBQOARfRFHXQrx9g',
  );

  return <Router />;
}

export default App;
