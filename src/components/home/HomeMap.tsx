import React, { memo, useEffect, useState } from 'react';
import {
  Marker,
  NaverMap,
  useNavermaps,
  Container as MapDiv,
} from 'react-naver-maps';

import { focusedPlaceAtom, placesAtom } from '@store/placesAtom';
import { useAtomValue, useSetAtom } from 'jotai';

import { createBounds } from '@utils/createBounds';

interface HomeMapProps {
  handleMarkerClick?: () => void;
}

const HomeMap = ({ handleMarkerClick }: HomeMapProps) => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const setFocusedPlace = useSetAtom(focusedPlaceAtom);
  const places = useAtomValue(placesAtom);

  const navermaps = useNavermaps();
  const placesAtomValue = useAtomValue(placesAtom);

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
      <NaverMap ref={setMap}>
        {placesAtomValue.map((place) => {
          return (
            <Marker
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