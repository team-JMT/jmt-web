import React, { HTMLAttributes } from 'react';

import DownArrowLine from '@assets/icons/DownArrowLine';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 4.8rem;
  align-items: center;
  justify-content: space-between;
  color: ${colors.gray900};
  background: ${colors.white};
  padding: 1.2rem 1.8rem;
  border: none;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 1.2rem rgba(22, 26, 29, 0.1);
`;
interface Props extends HTMLAttributes<HTMLButtonElement> {}
const AddressButton = ({ children, ...rest }: Props) => {
  return (
    <StyledButton {...rest} className={classNames('text-l-medium')}>
      {children}
      <DownArrowLine />
    </StyledButton>
  );
};

export default AddressButton;
