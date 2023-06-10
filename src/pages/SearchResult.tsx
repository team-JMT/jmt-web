import React from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';

const SearchResult = () => {
  const { pop } = useHomeFlow();
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
      <div></div>
    </AppScreen>
  );
};

export default SearchResult;
