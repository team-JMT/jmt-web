import React, { useEffect, useState } from 'react';

import FilterIcon from '@assets/filter';
import BottomSheetCompoenet from '@components/common/BottomSheet';
import { bottomSheetState } from '@store/bottomSheetAtom';
import { LiquorKey, drinkCategoryState } from '@store/filterAtom';
import { colors } from '@styles/theme/color';
import { useAtom } from 'jotai';

import FooterButton from './components/FooterButton';
import { FilterBox, FilterContainer, FilterTitle } from './styled';

const DrinkCategoryFilter = () => {
  const [bottomSheet] = useAtom(bottomSheetState);

  const [drinkState, setDrinkState] = useAtom(drinkCategoryState);
  const [localDrink, setLocalDrink] = useState('');

  const liquorKeyList = Object.keys(LiquorKey);

  //바텀시트가 닫히고 열릴 때 마다 local정보 초기화 = 확인 버튼 클릭 전 정보 초기화
  useEffect(() => {
    setLocalDrink(drinkState);
  }, [bottomSheet]);

  return (
    <BottomSheetCompoenet
      type={'DRINK_CATEGORY'}
      content={
        <>
          <FilterTitle>
            <div>종류</div>
            <div className={'active'}>주류여부</div>
          </FilterTitle>
          <FilterContainer>
            {liquorKeyList.map((item: string) => {
              const value = LiquorKey[item as keyof typeof LiquorKey];
              return (
                <FilterBox
                  key={item}
                  active={localDrink === item}
                  className={'title-s-medium'}
                  onClick={() => setLocalDrink(item)}
                >
                  <FilterIcon
                    iconName={item}
                    color={
                      localDrink === item ? colors.main500 : colors.gray300
                    }
                  />
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
