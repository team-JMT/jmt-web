import React from 'react';

import VConsole from 'vconsole';

import Router from './Routes/Router';
import { getAccessToken } from './utils/bridge';

function App() {
  getAccessToken();
  import.meta.env.MODE === 'development' && new VConsole();

  return <Router />;
}

export default App;
