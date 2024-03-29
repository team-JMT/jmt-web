import React, { useState } from 'react';

import CheckIcon from '@assets/icons/CheckIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

interface ChildComponentProps {
  children: string;
  isActive: boolean;
}

const Reason = ({ children, isActive }: ChildComponentProps) => {
  const [active, setActive] = useState(false);

  return (
    <ReasonBox
      active={isActive}
      className={'text-l-medium'}
      onClick={() => {
        setActive(!active);
      }}
    >
      <CheckIcon check={isActive} />
      {children}
    </ReasonBox>
  );
};

export default Reason;

const ReasonBox = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 12px;
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
