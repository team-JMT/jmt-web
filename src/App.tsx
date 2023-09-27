import React from 'react';

import VConsole from 'vconsole';

import { getAccessToken, getUserPosition } from '@utils/bridge';

import Router from './Routes/Router';

function App() {
  getAccessToken();
  getUserPosition();

  import.meta.env.MODE === 'development' && new VConsole();

  return <Router />;
}

export default App;
