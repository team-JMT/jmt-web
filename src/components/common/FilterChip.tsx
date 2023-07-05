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
const FilterChip = ({
  children,
  active,

  ...rest
}: FilterChipProps) => {
  return (
    <StyledFilterChip
      className={classNames('text-s-medium', 'gray900')}
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
  width: fit-content;
  border: 0 solid;
  background: ${colors.gray100};
  border-radius: 5rem;
  ${({ active }) =>
    active &&
    css`
      background: ${colors.white};
      border: 1px solid ${colors.gray200};
    `};
`;

export default FilterChip;
