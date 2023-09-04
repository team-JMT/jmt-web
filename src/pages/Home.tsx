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
  navigateToEditRestaurant,
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

  const mockRef = useRef<HTMLInputElement>(null);

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
                  onClick={() => backEnable(true)}
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
                  onClick={() => navigationEnable(true)}
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
                  onClick={() => {
                    navigateToEditRestaurant(mockRef.current?.value ?? '');
                    console.log('restaurantId', mockRef.current?.value);
                  }}
                  className={'text-m-medium'}
                >
                  <input ref={mockRef} />
                  goToEditRestaurantInfo
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
