import React from 'react';

import Modal from '@commons/Modal';
import NaverMap from '@components/common/NaverMap';
import HomeBottomSheet from '@components/home/BottomSheet';
import BottomSheetHeader from '@components/home/BottomSheetHeader';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import '../styles/bottomSheet.css';
import AddPlaceCard from '@components/home/AddPlaceCard';
import Tab from '@components/common/Tab/Tab';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Modal type={'IS_OPEN'} content={<div>Modal test</div>} />
      <AppScreen>
        <NaverMap />
        <HomeBottomSheet>
          <div className={'container-inner'}>
            <div className={'home-content-container'}>
              <BottomSheetHeader />
              <AddPlaceCard />
              <Tab.Root defaultId={'AROUND'}>
                <Tab id={'AROUND'} color={'main500'}>
                  둘러 보기
                </Tab>
                <Tab id={'ALL'} color={'main500'}>
                  전체 보기
                </Tab>
              </Tab.Root>
            </div>
          </div>
        </HomeBottomSheet>
      </AppScreen>
    </>
  );
};

export default Home;
