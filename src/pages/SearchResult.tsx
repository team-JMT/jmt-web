import React, { Suspense } from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import { SearchInputMock } from '@commons/input/SearchInput';
import SearchResultList from '@layouts/SearchResult/SearchResultList';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';

type SearchResultProps = {
  params: {
    keyword: string;
  };
};

const SearchResult = ({ params: { keyword } }: SearchResultProps) => {
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
          <Suspense fallback={'로딩'}>
            <SearchResultList keyword={decodeKeyword} />
          </Suspense>
        </div>
      </main>
    </AppScreen>
  );
};

export default SearchResult;
