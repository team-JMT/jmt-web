/* eslint-disable import/order */
import React from 'react';

import NaverMap from '@components/common/NaverMap';
import Tab from '@components/common/Tab/Tab';
import AddPlaceCard from '@components/home/AddPlaceCard';
import HomeBottomSheet from '@components/home/BottomSheet';
import BottomSheetHeader from '@components/home/BottomSheetHeader';
import HomeAround from '@layouts/Home/HomeAround';
import HomeSeeAll from '@layouts/Home/HomeSeeAll';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import '../styles//common/bottomSheet.css';

import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const [tab, setTab] = React.useState('AROUND');

  return (
    <>
      <AppScreen>
        <NaverMap />
        <HomeBottomSheet>
          <div className={'container-inner'}>
            <div className={'home-content-container'}>
              <BottomSheetHeader />
              <AddPlaceCard />
              <Tab.Root defaultId={tab} setState={setTab}>
                <Tab id={'AROUND'} color={'main500'}>
                  둘러 보기
                </Tab>
                <Tab id={'ALL'} color={'main500'}>
                  전체 보기
                </Tab>
              </Tab.Root>
              <AnimatePresence mode="sync">
                {tab === 'AROUND' ? <HomeAround /> : <HomeSeeAll />}
              </AnimatePresence>
            </div>
          </div>
        </HomeBottomSheet>
      </AppScreen>
    </>
  );
};

export default Home;
