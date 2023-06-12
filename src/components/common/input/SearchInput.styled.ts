import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import { motion } from 'framer-motion';

export const SearchInputContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`;
export const SearchInputWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: ${colors.gray100};
`;

export const Icon = styled(motion.img)<{ active: boolean }>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  ${({ active }) =>
    active &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const StyledInput = styled(motion.input)<{ active: boolean }>`
  width: 100%;
  border: none;
  padding: 16px 12px 16px 38px;
  border-radius: 5px;
  background: transparent;
  color: ${colors.gray900};
  outline: none;
  ${({ active }) =>
    active &&
    css`
      padding-left: 12px;
    `}
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: ${colors.gray200};
  }
`;

export const MockInput = styled(motion.div)`
  width: 100%;
  border: none;
  padding: 16px 12px 16px 38px;
  border-radius: 5px;
  background: transparent;
  color: ${colors.gray200};
  outline: none;
`;
