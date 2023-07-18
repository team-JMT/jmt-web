import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors } from '../../../styles/theme/color';

export const DetailMenuWrapper = styled.div`
  position: relative;
  width: calc(100vw - 40px);
  height: 48px;
  margin: 16px 0;
  border: solid ${colors.gray100} 4px;
  border-radius: 8px;
  background: ${colors.gray100};
  z-index: 1;
`;

export const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33.3%;
`;

export const AnimateBlock = styled(motion.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: ${colors.white};
  color: ${colors.main500};
  box-shadow: 0px 0px 8px rgba(22, 26, 29, 0.1);
  border-radius: 4px;
  z-index: 2;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
`;

export const Menu = styled(motion.div)<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${colors.gray400};
  z-index: 3;
  ${({ active }) =>
    active &&
    css`
      letter-spacing: -0.02em;
      font-weight: 700;
      color: ${colors.main500};
    `}
`;
