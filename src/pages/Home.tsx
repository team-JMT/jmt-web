import React, { Suspense, useRef, useState } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import HomeBottomSheet from '@components/home/BottomSheet';
import FixedPlaceDetail from '@components/home/FixedPlaceDetail';
import HomeHeader from '@components/home/HomeHeader';
import HomeMap from '@components/home/HomeMap';
import HomePlaceList from '@layouts/Home/HomePlaceList';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { mapAtom } from '@store/mapAtom';
import { AnimatePresence } from 'framer-motion';
import { useAtomValue } from 'jotai';

const Home = () => {
  const [tab, setTab] = useState('AROUND');
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const bottomRef = useRef<BottomSheetRef>(null);
  const lat = useAtomValue(mapAtom);

  console.log(lat);

  const handleMarkerClick = () => {
    bottomRef.current?.snapTo(97);
  };

  return (
    <>
      <AppScreen>
        <AnimatePresence>
          <HomeHeader />
          <HomeMap
            map={map}
            setMap={setMap}
            handleMarkerClick={handleMarkerClick}
          />
          <FixedPlaceDetail />
          <HomeBottomSheet ref={bottomRef}>
            <div className={'container-inner'}>
              <div className={'home-content-container'}>
                <Suspense fallback={'loading'}>
                  <HomePlaceList />
                </Suspense>
              </div>
            </div>
          </HomeBottomSheet>
        </AnimatePresence>
      </AppScreen>
    </>
  );
};

export default Home;
