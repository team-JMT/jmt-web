import React, { forwardRef } from 'react';

import searchIcon from '@assets/icons/search.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { colors } from '../../../styles/theme/color';

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

  return (
    <motion.div className={'input-container'}>
      <motion.div className={'input-wrapper'}>
        <AnimatePresence>
          <Icon src={searchIcon} alt={'search-icon'} active={!onFocusState} />
          {/*  @ts-ignore */}
          <StyledInput
            {...rest}
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
    </motion.div>
  );
};

const SearchInputMock = forwardRef<HTMLDivElement, InputProps>(
  ({ ...rest }, ref) => {
    return (
      <motion.div className={'input-container'} ref={ref}>
        <motion.div className={'input-wrapper'}>
          <AnimatePresence>
            <Icon src={searchIcon} alt={'search-icon'} active={true} />
            {/*  @ts-ignore */}
            <StyledInput
              {...rest}
              active={false}
              placeholder={'음식이나 식당명을 검색하세요'}
              className={classNames('text-l-medium')}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  },
);

SearchInput.Mock = SearchInputMock;

const Icon = styled(motion.img)<{ active: boolean }>`
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

export default SearchInput;
