import React, { HTMLAttributes, ReactNode } from 'react';

import DownArrow from '@assets/icons/DownArrow';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

export interface FilterChipOptionProps {
  active?: boolean;
}

export interface FilterChipProps
  extends HTMLAttributes<HTMLDivElement>,
    FilterChipOptionProps {
  children: ReactNode;
}
const FilterChip = ({ children, active = false, ...rest }: FilterChipProps) => {
  return (
    <StyledFilterChip
      className={classNames('text-m-medium', 'gray900')}
      active={active}
      {...rest}
    >
      {children}
      <DownArrow active={active} />
    </StyledFilterChip>
  );
};

export const StyledFilterChip = styled.div<FilterChipOptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1.2rem 0.4rem 1rem;
  white-space: nowrap;
  gap: 0.4rem;
  height: 2.6rem;
  border: 1px solid ${colors.gray200};
  border-radius: 5rem;
  ${({ active }) =>
    active &&
    css`
      background: ${colors.white};
    `};
`;

export default FilterChip;
