import React, { HTMLAttributes, ReactNode } from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Chip = ({ children, ...rest }: ChipProps) => {
  return (
    <StyledChip className={classNames('text-s-medium', 'gray900')} {...rest}>
      {children}
    </StyledChip>
  );
};

export const StyledChip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1.2rem 0.4rem 1rem;
  white-space: nowrap;
  gap: 0.4rem;
  width: fit-content;
  border: 1px solid ${colors.gray200};
  border-radius: 50px;
`;

export default Chip;
