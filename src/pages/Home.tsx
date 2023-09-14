import React, { Suspense, useRef, useState } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import HomeBottomSheet from '@components/home/BottomSheet';
import FixedPlaceDetail from '@components/home/FixedPlaceDetail';
import HomeHeader from '@components/home/HomeHeader';
import HomeMap from '@components/home/HomeMap';
import HomePlaceList from '@layouts/Home/HomePlaceList';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useStack } from '@stackflow/react';

const Home = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const bottomRef = useRef<BottomSheetRef>(null);

  const handleMarkerClick = () => {
    bottomRef.current?.snapTo(97);
  };

  const stack = useStack();

  const findHomeActivity = stack.activities.find(
    (activity) => activity.name === 'Home',
  );

  return (
    <AppScreen>
      <HomeHeader />
      <HomeMap
        map={map}
        setMap={setMap}
        handleMarkerClick={handleMarkerClick}
      />
      <FixedPlaceDetail />
      {findHomeActivity?.isTop && (
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
