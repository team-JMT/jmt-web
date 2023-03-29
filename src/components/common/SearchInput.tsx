import React, { useLayoutEffect } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import searchIcon from '../../assets/icons/search.svg';
import { colors } from '../../styles/theme/color';

const iconAnimate = {
  initial: {
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 0,
  },
  animate: {
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 1,
  },
  exit: {
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 0,
  },
};
const easeAnimate = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ onFocus, onBlur, ...rest }: InputProps) => {
  const [onFocusState, setOnFocusState] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleCancel = () => {
    if (inputRef.current === null) {
      return;
    }
    inputRef.current.blur();
    inputRef.current.value = '';
  };
  const onHandleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setOnFocusState(true);
    onFocus && onFocus(e);
  };
  const onHandleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setOnFocusState(false);
    onBlur && onBlur(e);
  };
  useLayoutEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div className={'input-container'}>
      <LayoutGroup>
        <motion.div className={'input-wrapper'}>
          <AnimatePresence>
            <Icon src={searchIcon} alt={'search-icon'} active={!onFocusState} />
            <StyledInput
              onFocus={onHandleFocus}
              onBlur={onHandleBlur}
              active={onFocusState}
              ref={inputRef}
              placeholder={'음식이나 식당명을 검색하세요'}
              className={classNames('text-l-medium')}
            />
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          {onFocusState && (
            <motion.span
              key={'cancel-button'}
              className={classNames('text-m-medium', 'gray600')}
              variants={easeAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              onClick={handleCancel}
            >
              취소
            </motion.span>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
};

const Icon = styled(motion.img)<{ active: boolean }>`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
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
  padding: 1.6rem 1.2rem 1.6rem 3.8rem;
  border-radius: 0.5rem;
  background: transparent;
  color: ${colors.gray900};
  outline: none;
  ${({ active }) =>
    active &&
    css`
      padding-left: 1.2rem;
    `}
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: ${colors.gray200};
  }
`;

export default SearchInput;
