import React, { useEffect, useRef } from 'react';

import styled from '@emotion/styled';

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const NaverMapProp = ({ x, y }: { x: number; y: number }) => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;

    if (!mapElement.current || !window.naver) {
      return;
    }

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location: naver.maps.LatLng = new naver.maps.LatLng(y, x);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      // zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map: naver.maps.Map = new naver.maps.Map(
      mapElement.current,
      mapOptions,
    );
    new naver.maps.Marker({
      position: location,
      map,
      icon: {
        url: '/assets/PlacePin.svg',
      },
    });
  }, []);
  return <MapContainer ref={mapElement} />;
};
export default NaverMapProp;
