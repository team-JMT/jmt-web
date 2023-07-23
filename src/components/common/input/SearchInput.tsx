import React, { forwardRef } from 'react';

import searchIcon from '@assets/icons/search.svg';
import {
  Icon,
  MockInput,
  SearchInputContainer,
  SearchInputWrapper,
  StyledInput,
} from '@commons/input/SearchInput.styled';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import useComposedRef from '@hooks/useConposedRef';

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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  ({ onFocus, onBlur, onSearch, ...rest }, ref) => {
    const [onFocusState, setOnFocusState] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const composedRef = useComposedRef(inputRef, ref);
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

    const handleOnPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch && onSearch(e);
      }
    };

    return (
      <SearchInputContainer>
        <SearchInputWrapper>
          <AnimatePresence>
            <Icon src={searchIcon} alt={'search-icon'} active={!onFocusState} />
            {/*  @ts-ignore */}
            <StyledInput
              {...rest}
              onFocus={onHandleFocus}
              onBlur={onHandleBlur}
              onKeyPress={handleOnPress}
              active={onFocusState}
              ref={composedRef}
              placeholder={'음식이나 식당명을 검색하세요'}
              className={classNames('text-l-medium')}
            />
          </AnimatePresence>
        </SearchInputWrapper>
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
      </SearchInputContainer>
    );
  },
);

export const SearchInputMock = forwardRef<HTMLDivElement, InputProps>(
  ({ placeholder, value, ...rest }, ref) => {
    return (
      <SearchInputContainer ref={ref}>
        <SearchInputWrapper className={'input-wrapper'}>
          <AnimatePresence>
            <Icon src={searchIcon} alt={'search-icon'} active={true} />

            {/*  @ts-ignore*/}
            <MockInput
              {...rest}
              className={classNames(
                'text-l-medium',
                value ? 'gray900' : 'gray200',
              )}
            >
              {value ?? placeholder}
            </MockInput>
          </AnimatePresence>
        </SearchInputWrapper>
      </SearchInputContainer>
    );
  },
);

export default SearchInput;
