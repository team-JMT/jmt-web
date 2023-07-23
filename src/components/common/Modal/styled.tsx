import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LayerWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(22, 26, 29, 0.3);
  opacity: 1;
  content: '';
  z-index: 100;
`;

export const CenterInner = styled(motion.div)`
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  height: 200px;
  width: 335px;
  position: relative;
  top: calc(50vh - 100px);
  z-index: 130;
`;
