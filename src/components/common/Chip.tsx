import React, { HTMLAttributes, ReactNode } from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Chip = ({ children }: ChipProps) => {
  return (
    <StyledChip className={classNames('text-m-medium', 'gray900')}>
      {children}
    </StyledChip>
  );
};

export const StyledChip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.6px 1.2rem;
  white-space: nowrap;
  gap: 0.4rem;
  height: 3.3rem;
  border: 1px solid ${colors.gray200};
  border-radius: 50px;
`;

export default Chip;
