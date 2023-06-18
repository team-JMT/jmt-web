import React from 'react';

import { CenterInner } from './styled';

interface ModalProps {
  children: React.ReactNode;
}
const Center = ({ children }: ModalProps) => {
  return <CenterInner>{children}</CenterInner>;
};

export default Center;
