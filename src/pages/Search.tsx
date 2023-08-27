import React, { Suspense, useEffect, useRef, useState } from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import SearchInput from '@commons/input/SearchInput';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import SearchLogList from '@layouts/Search/SearchLogList';
import SearchPreview from '@layouts/Search/SearchPreview';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addSearchLogAtom, searchLogAtom } from '@store/searchLogAtom';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';

const searchLogData = [
  '메뉴이름',
  '메뉴',
  '마라탕',
  '메뉴이름',
  '메뉴',
  '마라탕',
];
const Search = () => {
  const { push, pop } = useHomeFlow();
  const [searchLog, setSearchLog] = useAtom(searchLogAtom);

  const addSearchLog = useSetAtom(addSearchLogAtom);
  const [inputValue, setInputValue] = useState<string>();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (typeof inputValue === 'string') {
      addSearchLog({
        name: inputValue,
      });
      push('SearchResult', {
        keyword: encodeURI(inputValue),
      });
    }
  };

  useEffect(() => {
    const handleFocus = () => {
      setIsFocus(true);
    };
    const handleBlur = () => {
      setTimeout(() => {
        setIsFocus(false);
      }, 100);
    };
    if (searchRef.current) {
      searchRef.current.addEventListener('focus', handleFocus);
      searchRef.current.addEventListener('blur', handleBlur);
    }
    return () => {
      if (searchRef.current) {
        searchRef.current.removeEventListener('focus', handleFocus);
        searchRef.current.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return (
    <AppScreen
      appBar={{
        title: <h1 className={'text-l-medium'}>검색</h1>,
        backButton: {
          render: () => (
            <button className={'back-button'} onClick={pop}>
              <LeftArrowIcon />
            </button>
          ),
        },
        height: '48px',
      }}
    >
      <main className={'safe-area-layout-container'}>
        <div className={'container-inner'}>
          <AnimatePresence>
            <div className={'search-input-wrapper'}>
              <SearchInput
                ref={searchRef}
                placeholder={'맛집을 검색해보세요'}
                onChange={(e) => setInputValue(e.target.value)}
                onSearch={() => handleSearch()}
              />
            </div>
            {!isFocus && (
              <motion.div
                className={'search-log-menu'}
                variants={fadeInOut}
                {...variantKey}
              >
                <span className={classNames('text-l-bold', 'gray900')}>
                  최근 검색
                </span>
                <button
                  className={classNames('text-m-medium', 'gray400')}
                  onClick={() => setSearchLog(RESET)}
                >
                  전체삭제
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {!isFocus && <SearchLogList />}
          {isFocus && (
            <Suspense fallback={<div>로딩 중</div>}>
              <SearchPreview inputValue={inputValue} />
            </Suspense>
          )}
        </AnimatePresence>
      </main>
    </AppScreen>
  );
};

export default Search;
