import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: ${colors.main500};
`;

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return (
    <StyledButton {...rest}>
      <span className={classNames('text-l-bold', 'white')}>{children}</span>
    </StyledButton>
  );
};

export default Button;
