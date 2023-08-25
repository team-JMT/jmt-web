import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  min-height: 300px;
  max-height: 346px;
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
    `}
`;
export const FilterIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: gray;
`;
