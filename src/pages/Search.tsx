import React, { Suspense, useRef, useState } from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import SearchInput from '@components/common/input/SearchInput';
import SearchLogList from '@layouts/Search/SearchLogList';
import SearchPreview from '@layouts/Search/SearchPreview';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { searchLogAtom } from '@store/searchLogAtom';
import classNames from 'classnames';
import { useAtom } from 'jotai';
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
  const [inputValue, setInputValue] = useState<string>();
  const searchRef = useRef<HTMLInputElement>(null);

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
          <div className={'search-input-wrapper'}>
            <SearchInput
              ref={searchRef}
              placeholder={'맛집을 검색해보세요'}
              onChange={(e) => setInputValue(e.target.value)}
              onSearch={() => {
                if (typeof inputValue === 'string') {
                  push('SearchResult', {
                    keyword: encodeURI(inputValue),
                  });
                }
              }}
            />
          </div>
          <button onClick={() => push('PlaceDetail', { placeId: '123' })}>
            못생긴 버튼
          </button>
          <div className={'search-log-menu'}>
            <span className={classNames('text-l-bold', 'gray900')}>
              최근 검색
            </span>
            <button
              className={classNames('text-l-medium', 'gray400')}
              onClick={() => setSearchLog(RESET)}
            >
              전체삭제
            </button>
          </div>
        </div>
        <SearchLogList />
        <Suspense fallback={<div>로오오오오오오오오오오오오오오딩</div>}>
          <SearchPreview inputValue={inputValue} />
        </Suspense>
      </main>
    </AppScreen>
  );
};

export default Search;
