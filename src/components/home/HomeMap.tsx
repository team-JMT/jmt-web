import React, { createRef, memo, RefObject, useEffect, useState } from 'react';
import {
  Marker,
  NaverMap,
  useNavermaps,
  Container as MapDiv,
} from 'react-naver-maps';

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
  const [elRefs, setElRefs] = useState<Array<RefObject<naver.maps.Marker>>>([]);
  const lat = useAtomValue(mapAtom);
  const setLat = useSetAtom(mapAtom);

  const setLatHandler = () => {
    const mapLat = map?.getBounds();
    if (mapLat) {
      setLat({
        남서_좌표: {
          // @ts-ignore
          x: mapLat?._sw.x,
          // @ts-ignore
          y: mapLat?._sw.y,
        },
        북동_좌표: {
          // @ts-ignore
          x: mapLat?._ne.x,
          // @ts-ignore
          y: mapLat?._ne.y,
        },
      });
    }
  };

  const onCenterChanged = () => {
    setLatHandler();
  };

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(placesAtomValue.length)
        .fill('')
        .map((_, i) => elRefs[i] || createRef()),
    );
  }, [placesAtomValue]);

  useEffect(() => {
    const bounds = createBounds(places);
    map?.fitBounds(bounds);
  }, [places]);

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      <NaverMap ref={setMap} onCenterChanged={onCenterChanged}>
        <MarkerCluster markers={elRefs} />
        {placesAtomValue.map((place, index) => {
          return (
            <Marker
              ref={elRefs[index]}
              icon={{
                url: 'assets/PlacePin.svg',
              }}
              onClick={(e) => {
                if (!map) {
                  return;
                }
                map.panTo(new navermaps.LatLng(place.y, place.x));
                const idle = navermaps.Event.addListener(
                  map,
                  'idle',
                  async () => {
                    await setFocusedPlace(place);
                    await navermaps.Event.removeListener(idle);
                  },
                );
                handleMarkerClick && handleMarkerClick();
              }}
              key={place.id}
              position={new navermaps.LatLng(place.y, place.x)}
            />
          );
        })}
      </NaverMap>
    </MapDiv>
  );
};

export default memo(HomeMap);
