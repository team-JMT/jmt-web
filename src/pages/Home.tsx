import React from 'react';

import NaverMap from '@components/common/NaverMap';
import HomeBottomSheet from '@components/home/BottomSheet';
import BottomSheetHeader from '@components/home/BottomSheetHeader';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import '../styles/bottomSheet.css';

const Home = () => {
  return (
    <AppScreen>
      <NaverMap />
      <HomeBottomSheet>
        <div className={'container-inner'}>
          <BottomSheetHeader />
        </div>
      </HomeBottomSheet>
    </AppScreen>
  );
};

export default Home;
