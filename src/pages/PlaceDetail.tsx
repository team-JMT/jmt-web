import React from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';

import leftArrowIcon from '../assets/icons/leftArrow.svg';
import { useSearchFlow } from '../stacks/searchStackFlow';

const PlaceDetail = () => {
  const { pop } = useSearchFlow();
  return (
    <AppScreen>
      <nav className={'screen-header'}>
        <div className={'back-button-container'}>
          <button className={'back-button'} onClick={pop}>
            <img src={leftArrowIcon} />
          </button>
        </div>
        <span className={'text-l-medium'}>상세페이지</span>
      </nav>
      PlaceDetail
    </AppScreen>
  );
};

export default PlaceDetail;
