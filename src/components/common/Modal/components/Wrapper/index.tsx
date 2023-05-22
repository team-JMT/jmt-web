import React from 'react';

import { Inner } from './styled';

interface ModalProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: ModalProps) => {
  return (
    <Inner
      initial={{ y: '100%' }}
      animate={{
        y: '0',
      }}
      exit={{ y: '100%' }}
      transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 0.5,
      }}
    >
      {children}
    </Inner>
  );
};

export default Wrapper;
