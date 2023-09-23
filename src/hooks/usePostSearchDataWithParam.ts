import { useState } from 'react';

import { usePostSearchRestaurantInfinite } from '@apis/hooks/restaurant/usePostSearchRestaurantInfinite';
import {
  drinkCategoryState,
  drinkToBoolean,
  foodCategoryState,
  sortByState,
} from '@store/filterAtom';
import { mapLatAtom } from '@store/mapAtom';
import { useAtom, useAtomValue } from 'jotai';

import { useConditionalOnceEffect } from '@hooks/useConditionalOnceEffect';

export const usePostSearchDataWithParam = () => {
  const [enable, setEnable] = useState(false);
  const [foodState] = useAtom(foodCategoryState);
  const [drinkState] = useAtom(drinkCategoryState);
  const [sortState] = useAtom(sortByState);
  const bounds = useAtomValue(mapLatAtom);

  const handleEnable = async (toggle: boolean) => {
    setEnable(toggle);
  };

  const data = usePostSearchRestaurantInfinite({
    startLocation: bounds.북동_좌표,
    endLocation: bounds.남서_좌표,
    filter: {
      categoryFilter: foodState,
      isCanDrinkLiquor: drinkToBoolean(drinkState),
    },
    params: {
      page: 0,
      size: 10,
      sort: sortState,
    },
    enable,
  });

  const checkIsEnable =
    Number(bounds.북동_좌표.x) > 0 && Number(bounds.남서_좌표.y) > 0;

  useConditionalOnceEffect(() => {
    data.refetch();
    handleEnable(false);
  }, checkIsEnable);

  return { ...data, handleEnable };
};
