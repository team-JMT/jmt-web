import React from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import { useHomeFlow } from '../stacks/homeStackFlow';

const PlaceDetail = () => {
  const { pop } = useHomeFlow();
  return (
    <AppScreen
      appBar={{
        title: <h1 className={'text-l-medium'}>맛집 상세</h1>,
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
      PlaceDetail adasdasdasda
    </AppScreen>
  );
};

export default PlaceDetail;
