import React, { Suspense } from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import { SearchInputMock } from '@commons/input/SearchInput';
import LocationResultList from '@layouts/LocationResult/LocationResultList';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';

type LocationResultProps = {
  params: {
    keyword: string;
  };
};

const LocationResult = ({ params: { keyword } }: LocationResultProps) => {
  const { pop, push } = useHomeFlow();
  const decodeKeyword = decodeURI(keyword);

  return (
    <AppScreen
      appBar={{
        title: <h1 className={'text-l-medium'}>검색 결과</h1>,
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
            <SearchInputMock value={decodeKeyword} onClick={() => pop()} />
          </div>
        </div>
        <Suspense fallback={'로딩'}>
          <LocationResultList keyword={decodeKeyword} />
        </Suspense>
      </main>
    </AppScreen>
  );
};

export default LocationResult;
