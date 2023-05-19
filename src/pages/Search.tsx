import React, { useEffect, useState } from 'react';

import { getRestaurantData } from '@apis/common/restaurant';
import Chip from '@commons/Chip';
import SearchInput from '@commons/input/SearchInput';
import PlaceInfoCard from '@components/search/PlaceInfoCard';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import classNames from 'classnames';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import './Search.scss';
import { useHomeFlow } from '../stacks/homeStackFlow';

const placeListMock = [
  {
    name: '맛집1',
    address: '서울시 강남구',
    distance: 100,
  },
  {
    name: '맛집2',
    address: '서울시 강남구',
    distance: 100,
  },
  {
    name: '맛집3',
    address: '서울시 강남구',
    distance: 100,
  },
];

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

  const onClick = () => {
    push('PlaceDetail', { placeId: '123' });
  };

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
              <img src={leftArrowIcon} />
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
              <Chip key={`${data}${index}`}>{data}</Chip>
            ))}
          </div>
        </section>
        <section className={'list-container'}>
          {placeListMock.map((place, index) => (
            <PlaceInfoCard {...place} key={index} onClick={onClick} />
          ))}
        </section>
      </main>
    </AppScreen>
  );
};

export default Search;
