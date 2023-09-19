import React from 'react';

import styled from '@emotion/styled';
import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import {
  FoodKey,
  foodCategoryState,
  LiquorKey,
  drinkCategoryState,
} from '@store/filterAtom';
import { colors } from '@styles/theme/color';
import { useAtom, useSetAtom } from 'jotai';

interface FooterButtonProps {
  type: keyof typeof BOTTOM_SHEET_KEY;
  foodChecked?: keyof typeof FoodKey;
  drinkChecked?: keyof typeof LiquorKey;
}
const FooterButton: React.FC<FooterButtonProps> = ({
  type,
  foodChecked,
  drinkChecked,
}) => {
  const [, setFoodState] = useAtom(foodCategoryState);
  const [, setDrinkState] = useAtom(drinkCategoryState);

  const useToggleBottomSheet = useSetAtom(toggleBottomSheet);

  return (
    <Wrapper>
      <ResetButton
        className={'title-s-medium'}
        onClick={() => {
          if (foodChecked) {
            setFoodState('');
          } else if (drinkChecked) {
            setDrinkState('');
          }
          useToggleBottomSheet(type);
        }}
      >
        초기화
      </ResetButton>
      <CheckButton
        className={'title-s-medium'}
        onClick={() => {
          if (foodChecked) {
            setFoodState(foodChecked);
          } else if (drinkChecked) {
            setDrinkState(drinkChecked);
          }
          useToggleBottomSheet(type);
        }}
      >
        확인
      </CheckButton>
    </Wrapper>
  );
};

export default FooterButton;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;
const ResetButton = styled.div`
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  display: flex;
  min-width: 90px;
  height: 62px;
  justify-content: center;
  align-items: center;
  color: ${colors.gray400};
`;
const CheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  color: ${colors.white};
  background-color: ${colors.main500};
`;
