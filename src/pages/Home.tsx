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

import {
  backEnable,
  getAccessToken,
  handleNativeShare,
  navigateNativeRoute,
  navigationEnable,
} from '@utils/bridge';

const Home = () => {
  const [tab, setTab] = useState('AROUND');
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const bottomRef = useRef<BottomSheetRef>(null);
  const lat = useAtomValue(mapAtom);

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
                <button
                  onClick={() => getAccessToken()}
                  className={'text-m-medium'}
                >
                  getAccessToken
                </button>
                <button
                  onClick={() => backEnable()}
                  className={'text-m-medium'}
                >
                  backEnable
                </button>
                <button
                  onClick={() => backEnable(false)}
                  className={'text-m-medium'}
                >
                  backDisable
                </button>
                <button
                  onClick={() => navigationEnable()}
                  className={'text-m-medium'}
                >
                  navigationEnable
                </button>
                <button
                  onClick={() => navigationEnable(false)}
                  className={'text-m-medium'}
                >
                  navigationDisable
                </button>
                <button
                  onClick={() => handleNativeShare()}
                  className={'text-m-medium'}
                >
                  handleNativeShare
                </button>
                <button
                  onClick={() => navigateNativeRoute('editRestaurantInfo')}
                  className={'text-m-medium'}
                >
                  navigateNativeRoute
                </button>
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
