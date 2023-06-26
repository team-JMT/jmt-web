import React, { ReactNode } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

//import { colors } from '../../../styles/theme/color';

interface Props {
  icon?: ReactNode;
  content?: ReactNode;
}

const NoticeBox = ({ icon, content }: Props) => {
  return (
    <NoticeWrapper>
      {icon}
      <NoticeMessage>{content}</NoticeMessage>
    </NoticeWrapper>
  );
};

export default NoticeBox;

const NoticeWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: absolute;
  bottom: 126px;
  height: 56px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(22, 26, 29, 0.08);
`;

const NoticeMessage = styled.div`
  /*800*/
  color: #374248;
  text-align: center;
  /* text-l-medium */
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;
`;
