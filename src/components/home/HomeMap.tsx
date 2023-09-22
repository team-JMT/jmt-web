import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { NaverMap, useNavermaps, Container as MapDiv } from 'react-naver-maps';

import MarkerCluster from '@components/home/MarkerGluster';
import { getCurrentLocationAtom } from '@store/locationAtom';
import { mapLatAtom, naverMapAtom } from '@store/mapAtom';
import { focusedPlaceAtom, placesAtom } from '@store/placesAtom';
import { useAtomValue, useSetAtom, useAtom } from 'jotai';
import { throttle } from 'lodash-es';

interface HomeMapProps {
  handleMarkerClick?: () => void;
}

const HomeMap = ({ handleMarkerClick }: HomeMapProps) => {
  const [map, setMap] = useAtom(naverMapAtom);
  const setFocusedPlace = useSetAtom(focusedPlaceAtom);

  const [currentLat, setCurrentLat] = useState<
    naver.maps.Coord | naver.maps.CoordLiteral | undefined
  >();

  const navermaps = useNavermaps();
  const placesAtomValue = useAtomValue(placesAtom);

  const markerList = useRef<naver.maps.Marker[]>([]);

  const { x, y } = useAtomValue(getCurrentLocationAtom);
  const setLat = useSetAtom(mapLatAtom);

  const setLatHandler = useCallback(() => {
    const mapLat = map?.getBounds();
    if (mapLat) {
      setLat({
        남서_좌표: {
          // @ts-ignore
          x: String(mapLat?._sw.x),
          // @ts-ignore
          y: String(mapLat?._sw.y),
        },
        북동_좌표: {
          // @ts-ignore
          x: String(mapLat?._ne.x),
          // @ts-ignore
          y: String(mapLat?._ne.y),
        },
      });
    }
  }, [map]);

  useEffect(() => {
    setCurrentLat(new navermaps.LatLng(Number(y), Number(x)));
  }, [x, y]);

  const addMarkerHandler = useCallback(() => {
    if (!map) {
      return;
    }
    placesAtomValue.map((place, index) => {
      const marker = new navermaps.Marker({
        map: map,
        icon: {
          url: 'assets/PlacePin.svg',
          size: new navermaps.Size(40, 45),
          origin: new navermaps.Point(0, 0),
          anchor: new navermaps.Point(11, 35),
        },
        position: new navermaps.LatLng(place.y, place.x),
      });

      function getClickHandler(marker: naver.maps.Marker) {
        return function () {
          setFocusedPlace(place);
          map?.panTo(marker.getOptions('position'));
          handleMarkerClick && handleMarkerClick();
        };
      }

      navermaps.Event?.addListener(marker, 'click', getClickHandler(marker));

      navermaps.Event.addListener(map, 'idle', function () {
        markerList.current.push(marker);
      });
    });
  }, [placesAtomValue]);

  const removeMarkerHandler = useCallback(() => {
    // 기존 마커 있는 경우, 초기화
    if (markerList.current[0]) {
      markerList.current.forEach((e) => {
        e.setMap(null);
      });
      // markerList 배열 초기화
      markerList.current.splice(0);
    }
  }, [markerList]);

  useEffect(() => {
    if (!map) {
      return;
    }
    navermaps.Event?.addListener(
      map,
      'bounds_changed',
      throttle(setLatHandler, 1000),
    );
  }, [map]);

  useEffect(() => {
    removeMarkerHandler();
    addMarkerHandler();
  }, [placesAtomValue]);

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <NaverMap ref={setMap} center={currentLat}>
        <MarkerCluster markers={markerList.current} />
      </NaverMap>
    </MapDiv>
  );
};

export default memo(HomeMap);
