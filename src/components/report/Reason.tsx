import React, { ReactNode, useState } from 'react';

import CheckIcon from '@assets/icons/CheckIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

interface ChildComponentProps {
  children: ReactNode;
  // Add other props here if needed
}

const Reason: React.FC<ChildComponentProps> = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <ReasonBox
      active={active}
      className={'text-l-medium'}
      onClick={() => {
        setActive(!active);
      }}
    >
      <CheckIcon check={active} />
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
