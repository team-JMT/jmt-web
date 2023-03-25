import React from 'react';

import Router from './Routes/Router';
import { getAccessToken } from './utils/bridge';

function App() {
  getAccessToken();

  return <Router />;
}

export default App;
