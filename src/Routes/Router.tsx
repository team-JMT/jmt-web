import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import { SearchStack } from '../stacks/searchStackFlow';

const Router = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<NotFound />} />
      <Route path={'/search'} element={<SearchStack />} />
    </Routes>
  );
};

export default Router;
