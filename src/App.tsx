import React from 'react';

import reactLogo from './assets/react.svg';
import '@styles/App.scss';
import { getAccessToken } from './utils/bridge';

function App() {
  const getToken = () => {
    getAccessToken();
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={'title-l-bold'}>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={getToken}>Get Token123</button>
    </div>
  );
}

export default App;
