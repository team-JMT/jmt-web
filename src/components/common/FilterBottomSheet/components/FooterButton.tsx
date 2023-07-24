import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

const FooterButton = () => {
  return (
    <Wrapper>
      <ResetButton className={'title-s-medium'}>초기화</ResetButton>
      <CheckButton className={'title-s-medium'}>확인</CheckButton>
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
