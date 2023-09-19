import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

export const FilterTitle = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 28px;
  div {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
    color: ${colors.gray400};
  }
  .active {
    color: #000;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  //max-height: 270px;
  max-height: 100%;
  overflow: scroll;
`;
export const FilterBox = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 66px;
  padding-left: 20px;
  gap: 12px;
  border-radius: 8px;
  border: 2px solid ${colors.gray100};
  background-color: ${colors.white};

  ${({ active }) =>
    active &&
    css`
      border: 2px solid ${colors.main500};
    `};
`;
