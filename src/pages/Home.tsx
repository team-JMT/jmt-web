import React, { Suspense, useCallback, useRef } from 'react';
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
  const isHomeTop = useCheckTopActivity('Home');
  const bottomRef = useRef<BottomSheetRef>(null);

  const handleMarkerClick = useCallback(() => {
    bottomRef.current?.snapTo(97);
  }, [bottomRef]);

  useHandleNavigationBar();

  return (
    <AppScreen>
      <HomeHeader />
      <HomeMap handleMarkerClick={handleMarkerClick} />
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
