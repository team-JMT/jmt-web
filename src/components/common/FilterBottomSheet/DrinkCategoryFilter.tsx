import React, { useEffect, useState } from 'react';

import BottomSheetCompoenet from '@components/common/BottomSheet';
import { bottomSheetState } from '@store/bottomSheetAtom';
import { LiquorKey, drinkCategoryState, drinkCheck } from '@store/filterAtom';
import { useAtom } from 'jotai';

import FooterButton from './components/FooterButton';
import { FilterIcon, FilterBox, FilterContainer } from './styled';

const DrinkCategoryFilter = () => {
  const [bottomSheet, setBottomSheet] = useAtom(bottomSheetState);

  const [drinkState, setDrinkState] = useAtom(drinkCategoryState);
  const [localDrink, setLocalDrink] = useState('');

  //바텀시트가 닫히고 열릴 때 마다 local정보 초기화 = 확인 버튼 클릭 전 정보 초기화
  useEffect(() => {
    setLocalDrink(drinkState);
  }, [bottomSheet]);

  const changeLocal = (item: string) => {
    setLocalDrink(item as drinkCheck);
  };
  return (
    <BottomSheetCompoenet
      type={'DRINK_CATEGORY'}
      content={
        <>
          <FilterContainer>
            {Object.keys(LiquorKey).map((item: string) => {
              const value = LiquorKey[item as keyof typeof LiquorKey];
              return (
                <FilterBox
                  key={item}
                  active={localDrink === item}
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
            type={'DRINK_CATEGORY'}
            drinkChecked={localDrink as keyof typeof LiquorKey}
          />
        </>
      }
    ></BottomSheetCompoenet>
  );
};

export default DrinkCategoryFilter;
