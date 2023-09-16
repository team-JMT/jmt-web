import React, { Suspense, useRef, useState } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import HomeBottomSheet from '@components/home/BottomSheet';
import FixedPlaceDetail from '@components/home/FixedPlaceDetail';
import HomeHeader from '@components/home/HomeHeader';
import HomeMap from '@components/home/HomeMap';
import HomePlaceList from '@layouts/Home/HomePlaceList';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import { useCheckTopActivity } from '@hooks/useCheckTopActivity';
import { useHandleNavigationBar } from '@hooks/useHandleNavigationBar';

const Home = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const isHomeTop = useCheckTopActivity('Home');
  const bottomRef = useRef<BottomSheetRef>(null);

  const handleMarkerClick = () => {
    bottomRef.current?.snapTo(97);
  };

  useHandleNavigationBar();

  return (
    <AppScreen>
      <HomeHeader />
      <HomeMap
        map={map}
        setMap={setMap}
        handleMarkerClick={handleMarkerClick}
      />
      <FixedPlaceDetail />
      {isHomeTop && (
        <HomeBottomSheet ref={bottomRef}>
          <div className={'container-inner'}>
            <div className={'home-content-container'}>
              <Suspense fallback={'loading'}>
                <HomePlaceList />
              </Suspense>
            </div>
          </div>
        </HomeBottomSheet>
      )}
    </AppScreen>
  );
};

export default Home;
