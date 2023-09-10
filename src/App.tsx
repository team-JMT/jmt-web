import React from 'react';

import VConsole from 'vconsole';

import Router from './Routes/Router';
import { getAccessToken, getUserPosition } from './utils/bridge';

function App() {
  getAccessToken();
  getUserPosition();
  import.meta.env.MODE === 'development' && new VConsole();
  new VConsole();

  return <Router />;
}

export default App;
