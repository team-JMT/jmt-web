import React, { memo, useCallback, useEffect, useRef } from 'react';
import { NaverMap, useNavermaps, Container as MapDiv } from 'react-naver-maps';

import MarkerCluster from '@components/home/MarkerGluster';
import { mapAtom } from '@store/mapAtom';
import { focusedPlaceAtom, placesAtom } from '@store/placesAtom';
import { useAtomValue, useSetAtom } from 'jotai';

import { createBounds } from '@utils/createBounds';

interface HomeMapProps {
  map: naver.maps.Map | null;
  setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | null>>;
  handleMarkerClick?: () => void;
}

const HomeMap = ({ handleMarkerClick, setMap, map }: HomeMapProps) => {
  const setFocusedPlace = useSetAtom(focusedPlaceAtom);
  const places = useAtomValue(placesAtom);

  const navermaps = useNavermaps();
  const placesAtomValue = useAtomValue(placesAtom);

  const markerList = useRef<naver.maps.Marker[]>([]);

  const setLat = useSetAtom(mapAtom);

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
    setLatHandler();
  }, [map]);

  useEffect(() => {
    const bounds = createBounds(places);
    map?.fitBounds(bounds);
  }, []);

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

      markerList.current.push(marker);

      navermaps.Event?.addListener(marker, 'click', (e) => {
        map.panTo(new navermaps.LatLng(place.y, place.x));
        const idle = navermaps.Event.addListener(map, 'idle', async () => {
          setFocusedPlace(place);
          navermaps.Event.removeListener(idle);
        });
        handleMarkerClick && handleMarkerClick();
      });
    });
  }, [placesAtomValue, map]);

  const removeMarkerHandler = useCallback(() => {
    if (!Array.isArray(markerList.current)) {
      return;
    }
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
    removeMarkerHandler();
    addMarkerHandler();
  }, [placesAtomValue, map]);

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <NaverMap ref={setMap} onCenterChanged={() => setLatHandler()}>
        <MarkerCluster markers={markerList.current} />
      </NaverMap>
    </MapDiv>
  );
};

export default memo(HomeMap);
