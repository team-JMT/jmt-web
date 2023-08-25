import React, { useEffect, useState } from 'react';

import BottomSheetCompoenet from '@components/common/BottomSheet';
import { bottomSheetState } from '@store/bottomSheetAtom';
import { FoodKey, foodCategoryState, foodCheck } from '@store/filterAtom';
import { useAtom } from 'jotai';

import FooterButton from './components/FooterButton';
import { FilterIcon, FilterBox, FilterContainer, FilterTitle } from './styled';

const FoodCategoryFilter = () => {
  const [bottomSheet, setBottomSheet] = useAtom(bottomSheetState);

  const [foodState, setFoodState] = useAtom(foodCategoryState);
  const [localFood, setLocalFood] = useState('');

  useEffect(() => {
    setLocalFood(foodState);
  }, [bottomSheet]);

  const changeLocal = (item: string) => {
    setLocalFood(item as foodCheck);
  };

  return (
    <BottomSheetCompoenet
      type={'FOOD_CATEGORY'}
      content={
        <>
          <FilterTitle>
            <div className={'active'}>종류</div>
            <div>주류여부</div>
          </FilterTitle>
          <FilterContainer>
            {Object.keys(FoodKey).map((item: string) => {
              const value = FoodKey[item as keyof typeof FoodKey];
              return (
                <FilterBox
                  key={item}
                  active={localFood === item}
                  className={'title-s-medium'}
                  onClick={() => changeLocal(item)}
                >
                  <FilterIcon />
                  {value}
                </FilterBox>
              );
            })}
          </FilterContainer>
          <FooterButton
            type={'FOOD_CATEGORY'}
            foodChecked={localFood as keyof typeof FoodKey}
          />
        </>
      }
    ></BottomSheetCompoenet>
  );
};

export default FoodCategoryFilter;
