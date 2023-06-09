import React, { Suspense, useEffect, useState } from 'react';

import { getRestaurantData } from '@apis/common/restaurant';
import ExitIcon from '@assets/icons/ExitIcon';
import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import Chip from '@commons/Chip';
import SearchInput from '@commons/input/SearchInput';
import SearchPreview from '@components/layouts/Search/SearchPreview';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import classNames from 'classnames';

import './Search.scss';
import { useHomeFlow } from '../stacks/homeStackFlow';

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

  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    getRestaurantData({}).then((res) => {});
  }, []);

  const saveSearchLog = (value: string) => {
    localStorage.setItem('search-log', value);
  };

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
              placeholder={'맛집을 검색해보세요'}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className={'search-log-menu'}>
            <span className={classNames('text-l-bold', 'gray900')}>
              최근 검색
            </span>
            <button className={classNames('text-l-medium', 'gray400')}>
              전체삭제
            </button>
          </div>
        </div>
        <section className={'search-log-list'}>
          <div className={'search-log-list-wrapper'}>
            {searchLogData.map((data, index) => (
              <Chip key={`${data}${index}`}>
                {data}
                <ExitIcon />
              </Chip>
            ))}
          </div>
          <Suspense fallback={<div>로오오오오오오오오오오오오오오딩</div>}>
            <SearchPreview inputValue={inputValue} />
          </Suspense>
        </section>
      </main>
    </AppScreen>
  );
};

export default Search;
