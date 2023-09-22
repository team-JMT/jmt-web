import React from 'react';

import { Keys } from '@apis/common/Keys';
import { useGetCurrentLocation } from '@apis/hooks/location/useGetCurrentLocation';
import { usePostSearchRestaurantInfinite } from '@apis/hooks/restaurant/usePostSearchRestaurantInfinite';
import { queryClient } from '@apis/queryClient';
import RefreshIcon from '@assets/icons/RefreshIcon';
import SolidDownArrow from '@assets/icons/SolidDownArrow';
import { SearchInputMock } from '@commons/input/SearchInput';
import styled from '@emotion/styled';
import { getCurrentLocationAtom } from '@store/locationAtom';
import { mapAtom } from '@store/mapAtom';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';
import { useAtomValue } from 'jotai';

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
export const RefreshIconWrapper = styled.button`
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
  const lat = useAtomValue(mapAtom);
  const currentLocation = nativeInfo.getData();
  const { currentLocationData } = useGetCurrentLocation(
    currentLocation.userPosition,
  );
  const { refetch } = usePostSearchRestaurantInfinite({
    startLocation: lat?.북동_좌표,
    endLocation: lat?.남서_좌표,
    filter: {
      categoryFilter: undefined,
      isCanDrinkLiquor: true,
    },
    params: {
      page: 0,
      size: 10,
    },
  });

  const handleRefresh = async () => {
    await refetch();
    await queryClient.invalidateQueries([Keys.RESTAURANT]);
  };

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

      <RefreshIconWrapper onClick={() => handleRefresh()}>
        <RefreshIcon />
      </RefreshIconWrapper>
    </Container>
  );
};

export default HomeHeader;
