import React, { HTMLAttributes } from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  background: ${colors.white};
  padding: 1.2rem 1.8rem;
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 12px rgba(22, 26, 29, 0.1);
`;
interface Props extends HTMLAttributes<HTMLButtonElement> {}
const AddressButton = ({ children, ...rest }: Props) => {
  return (
    <StyledButton {...rest} className={classNames('text-l-medium')}>
      {children}
    </StyledButton>
  );
};

export default AddressButton;
