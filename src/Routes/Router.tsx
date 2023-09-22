import React from 'react';

import DrinkCategoryFilter from '@components/common/FilterBottomSheet/DrinkCategoryFilter';
import FoodCategoryFilter from '@components/common/FilterBottomSheet/FoodCategoryFilter';
import SortBy from '@components/common/FilterBottomSheet/SortBy';
import { HomeStack } from '@stacks/homeStackFlow';

const Router = () => {
  return (
    <>
      <HomeStack />
      <SortBy />
      <FoodCategoryFilter />
      <DrinkCategoryFilter />
    </>
  );
};

export default Router;
