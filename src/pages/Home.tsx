import React, { Suspense, useCallback, useRef } from 'react';
import Sheet from 'react-modal-sheet';
import { BottomSheetRef } from 'react-spring-bottom-sheet';

import HomeBottomSheet from '@components/home/BottomSheet';
import FixedPlaceDetail from '@components/home/FixedPlaceDetail';
import HomeHeader from '@components/home/HomeHeader';
import HomeMap from '@components/home/HomeMap';
import styled from '@emotion/styled';
import HomePlaceList from '@layouts/Home/HomePlaceList';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { colors } from '@styles/theme/color';

import { useCheckTopActivity } from '@hooks/useCheckTopActivity';
import { useHandleNavigationBar } from '@hooks/useHandleNavigationBar';

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    border-radius: 24px 24px 0 0 !important;
    background: ${colors.white};
    box-shadow: 0px -2px 16px 0px rgba(0, 0, 0, 0.08);
  }
  .react-modal-sheet-header {
    background: ${colors.white};
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    background: ${colors.white};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 20px;
  border-radius: 24px 24px 0 0;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
`;
const HeaderHandler = styled.div`
  display: flex;
  width: 40px;
  height: 3px;
  border-radius: 4px;
  background: ${colors.gray200};
`;

const Home = () => {
  const isHomeTop = useCheckTopActivity('Home');
  const bottomRef = useRef<BottomSheetRef>();

  const handleMarkerClick = useCallback(() => {
    bottomRef.current?.snapTo(97);
  }, [bottomRef]);

  useHandleNavigationBar();

  return (
    <AppScreen>
      <HomeHeader />
      <HomeMap handleMarkerClick={handleMarkerClick} />
      <FixedPlaceDetail />
      {/*{isHomeTop && (*/}
      {/*  <CustomSheet*/}
      {/*    isOpen={true}*/}
      {/*    onClose={() => {}}*/}
      {/*    ref={bottomRef}*/}
      {/*    snapPoints={[window.innerHeight - 116, 248, 97]}*/}
      {/*    initialSnap={1}*/}
      {/*  >*/}
      {/*    <Sheet.Container>*/}
      {/*      <Sheet.Header>*/}
      {/*        <HeaderContainer>*/}
      {/*          <HeaderHandler />*/}
      {/*        </HeaderContainer>*/}
      {/*      </Sheet.Header>*/}
      {/*      <Sheet.Content>*/}
      {/*        <div className={'container-inner'}>*/}
      {/*          <div className={'home-content-container'}>*/}
      {/*            <Suspense fallback={'loading'}>*/}
      {/*              <HomePlaceList />*/}
      {/*            </Suspense>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </Sheet.Content>*/}
      {/*    </Sheet.Container>*/}
      {/*  </CustomSheet>*/}
      {/*)}*/}
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
