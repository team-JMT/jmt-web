import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../../styles/theme/color';

export const DetailMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  left: -2px;
  width: calc(100% + 4px);
  height: 48px;
  padding: 4px;
  margin: 16px 0 12px 0;
  border-radius: 8px;
  background: ${colors.gray100};
`;

export const Menu = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32%;
  height: 40px;
  border-radius: 4px;
  color: ${colors.gray400};
  background: ${colors.gray100};
  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
      background: ${colors.white};
      color: ${colors.main600};
      box-shadow: 0px 0px 8px rgba(22, 26, 29, 0.1);
    `}
`;
