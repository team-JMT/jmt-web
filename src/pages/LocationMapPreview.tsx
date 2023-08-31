import React from 'react';

import LeftArrowIcon from '@assets/icons/LeftArrowIcon';
import Button from '@commons/button/Button';
import Footer from '@commons/Footer';
import NaverMapProp from '@commons/NaverMapProp';
import PlaceInfoCard from '@commons/PlaceInfoCard';
import styled from '@emotion/styled';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useHomeFlow } from '@stacks/homeStackFlow';
import {
  getSelectedLocationAtom,
  setCurrentLocationAtom,
} from '@store/locationAtom';
import { useAtomValue, useSetAtom } from 'jotai';

const CardWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 126px;
`;
const LeftArrowIconWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 12px;
  left: 0;
`;

const LocationMapPreview = () => {
  const { push, pop } = useHomeFlow();

  const { x, y, placeName, addressName } = useAtomValue(
    getSelectedLocationAtom,
  );
  const setCurrentLocation = useSetAtom(setCurrentLocationAtom);

  const handleSelectLocation = () => {
    setCurrentLocation({
      x,
      y,
      placeName,
      addressName,
    });
    pop(99);
    // push('Home', {});
  };

  return (
    <AppScreen>
      <main className={'layout-container'}>
        <LeftArrowIconWrapper>
          <button className={'back-button'} onClick={pop}>
            <LeftArrowIcon />
          </button>
        </LeftArrowIconWrapper>
        {x && y && <NaverMapProp x={Number(x)} y={Number(y)} />}
        <CardWrapper>
          <PlaceInfoCard placeName={placeName} addressName={addressName} />
        </CardWrapper>
        <Footer>
          <Button onClick={handleSelectLocation}>이 장소로 위치 변경</Button>
        </Footer>
      </main>
    </AppScreen>
  );
};

export default LocationMapPreview;
