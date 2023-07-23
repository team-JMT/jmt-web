import React, { useRef, useState } from 'react';

import Tab from '@components/common/Tab/Tab';
import AddPlaceCard from '@components/home/AddPlaceCard';
import HomeBottomSheet from '@components/home/BottomSheet';
import BottomSheetHeader from '@components/home/BottomSheetHeader';
import FixedPlaceDetail from '@components/home/FixedPlaceDetail';
import HomeMap from '@components/home/HomeMap';
import HomeAround from '@layouts/Home/HomeAround';
import HomeSeeAll from '@layouts/Home/HomeSeeAll';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import '../styles//common/bottomSheet.css';

import { AnimatePresence } from 'framer-motion';

import { BottomSheetRef } from 'react-spring-bottom-sheet';

const Home = () => {
  const [tab, setTab] = useState('AROUND');

  const bottomRef = useRef<BottomSheetRef>(null);

  const handleMarkerClick = () => {
    bottomRef.current?.snapTo(97);
  };

  return (
    <>
      <AppScreen>
        <AnimatePresence>
          <HomeMap handleMarkerClick={handleMarkerClick} />
          <FixedPlaceDetail />
          <HomeBottomSheet ref={bottomRef}>
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
        </AnimatePresence>
      </AppScreen>
    </>
  );
};

export default Home;
