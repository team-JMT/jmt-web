import React from 'react';

import VConsole from 'vconsole';

import Router from './Routes/Router';

function App() {
  // getAccessToken();
  // getUserPosition();
  // window.setAccessToken(
  //   'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5NDY5NTM1N30.XMMDTtjlcZS0H0NXrmR3Jr_F3EC3gMhk2_H2usBVw2bq5T2YenxkGG1gypXlV5sMFEU4ohVaHYAaFMhqZ9NAPQ',
  // );
  localStorage.setItem(
    'accessToken',
    'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5NDY5NTM1N30.XMMDTtjlcZS0H0NXrmR3Jr_F3EC3gMhk2_H2usBVw2bq5T2YenxkGG1gypXlV5sMFEU4ohVaHYAaFMhqZ9NAPQ',
  );
  import.meta.env.MODE === 'development' && new VConsole();

  return <Router />;
}

export default App;
