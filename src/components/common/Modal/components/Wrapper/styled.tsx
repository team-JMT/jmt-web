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

export const Inner = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  max-height: calc(100vh - env(safe-area-inset-top) - 5rem);
  min-height: 100px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-top-right-radius: 2.4rem;
  border-top-left-radius: 2.4rem;
  -webkit-box-sizing: border-box;
  padding: 3.2rem 2rem env(safe-area-inset-bottom) 2rem;
  box-sizing: border-box;
  z-index: 101;
  background-color: white;
`;
