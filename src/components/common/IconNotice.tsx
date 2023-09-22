import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

interface IconNoticeProps {
  image: ReactNode;
  text: ReactNode;
}

const IconNotice = ({ image, text }: IconNoticeProps) => {
  return (
    <Container>
      {image}
      {text}
    </Container>
  );
};

export default IconNotice;
