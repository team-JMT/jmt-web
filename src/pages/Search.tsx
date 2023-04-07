import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import SearchInput from '../components/common/SearchInput';
import PlaceInfoCard from '../components/search/PlaceInfoCard';
import { useSearchFlow } from '../stacks/searchStackFlow';
import './Search.scss';

const Search = () => {
  const { push } = useSearchFlow();

  const onClick = () => {
    push('PlaceDetail', { placeId: '123' });
  };

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

  return (
    <AppScreen
      appBar={{
        title: '검색',
        backButton: {
          render: () => (
            <button className={'back-button'}>
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
            <SearchInput placeholder={'맛집을 검색해보세요'} />
          </div>
          <section className={'list-container'}>
            {placeListMock.map((place, index) => (
              <PlaceInfoCard {...place} key={index} onClick={onClick} />
            ))}
          </section>
        </div>
      </main>
    </AppScreen>
  );
};

export default Search;
