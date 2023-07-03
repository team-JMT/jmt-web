import React, { useEffect } from 'react';

import Reject from '@assets/icons/Reject';
import Success from '@assets/icons/Success';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  icon?: string;
  content?: string;
}

const NoticeBox = ({ icon, content }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBox(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [showBox, setShowBox] = React.useState(true);

  return (
    <AnimatePresence>
      {showBox && (
        <NoticeWrapper
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {icon === 'success' ? <Success /> : <Reject />}
          <NoticeMessage>{content}</NoticeMessage>
        </NoticeWrapper>
      )}
    </AnimatePresence>
  );
};

export default NoticeBox;

const NoticeWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 126px;
  height: 56px;
  width: calc(100% - 40px);
  margin-left: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(22, 26, 29, 0.08);
  z-index: 20;
`;

const NoticeMessage = styled.div`
  color: #374248;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;
`;
