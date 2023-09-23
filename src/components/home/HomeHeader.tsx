import React, { useEffect, useState } from 'react';

import { Keys } from '@apis/common/Keys';
import { useGetCurrentLocation } from '@apis/hooks/location/useGetCurrentLocation';
import { queryClient } from '@apis/queryClient';
import RefreshIcon from '@assets/icons/RefreshIcon';
import SolidDownArrow from '@assets/icons/SolidDownArrow';
import { SearchInputMock } from '@commons/input/SearchInput';
import { fadeInOut } from '@components/motion/fade-in-out';
import styled from '@emotion/styled';
import { getCurrentLocationAtom } from '@store/locationAtom';
import { mapLatAtom, naverMapAtom } from '@store/mapAtom';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtomValue } from 'jotai';

import { usePostSearchDataWithParam } from '@hooks/usePostSearchDataWithParam';

import { nativeInfo } from '@utils/storage';

import { useHomeFlow } from '../../stacks/homeStackFlow';

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.white};
  padding-top: 4px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const RefreshIconWrapper = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 128px;
  right: 20px;
  background: ${colors.white};
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
export const MyPlaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  height: 44px;
  padding: 11px 20px 0 0;
  background: ${colors.white};
  cursor: pointer;
`;

const HomeHeader = () => {
  const { push } = useHomeFlow();
  const { addressName } = useAtomValue(getCurrentLocationAtom);
  const bounds = useAtomValue(mapLatAtom);

  const [centerChanged, setCenterChanged] = useState(false);
  const map = useAtomValue(naverMapAtom);

  const currentLocation = nativeInfo.getData();
  const { currentLocationData } = useGetCurrentLocation(
    currentLocation.userPosition,
  );
  const { refetch, handleEnable } = usePostSearchDataWithParam();

  const handleRefresh = async () => {
    await handleEnable(true);
    await queryClient.invalidateQueries([Keys.RESTAURANT]);
    await refetch();
    setCenterChanged(false);
    await handleEnable(false);
  };
  const checkIsBoundsChanged = () => {
    let currentBounds = '';
    return () => {
      if (JSON.stringify(bounds) !== currentBounds) {
        console.log(1);
        currentBounds = JSON.stringify(bounds);
        setCenterChanged(true);
      }
    };
  };

  useEffect(() => {
    checkIsBoundsChanged()();
  }, [bounds]);

  return (
    <Container>
      <SearchInputMock
        placeholder={'음식이나 식당명을 검색하세요'}
        onClick={() => push('Search', {})}
      />
      <MyPlaceContainer onClick={() => push('LocationSearch', {})}>
        <span className={classNames('text-m-medium', 'gray900')}>
          {addressName ??
            currentLocationData?.address ??
            currentLocationData?.roadAddress}
        </span>
        <SolidDownArrow />
      </MyPlaceContainer>
      <AnimatePresence>
        {centerChanged && (
          <RefreshIconWrapper
            onClick={() => handleRefresh()}
            variants={fadeInOut}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
          >
            <RefreshIcon />
          </RefreshIconWrapper>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default HomeHeader;
