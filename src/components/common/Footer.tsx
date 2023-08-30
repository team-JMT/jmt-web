import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 110px;
  background: ${colors.white};
  padding: 15px 20px 29px 20px;
`;

interface FooterProps {
  children?: React.ReactNode;
}
const Footer = ({ children }: FooterProps) => {
  return <Container>{children}</Container>;
};

export default Footer;
