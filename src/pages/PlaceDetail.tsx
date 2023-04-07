import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import { useSearchFlow } from '../stacks/searchStackFlow';

const PlaceDetail = () => {
  const { pop } = useSearchFlow();
  return (
    <AppScreen
      appBar={{
        title: '상세페이지',
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
      PlaceDetail adasdasdasda
    </AppScreen>
  );
};

export default PlaceDetail;
