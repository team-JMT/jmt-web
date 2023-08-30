import React from 'react';

import { useGetLocationSearch } from '@apis/hooks/location/useGetLocationSearch';
import LocationResultCard from '@components/locationResult/LocationResultCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { setSelectedLocationAtom } from '@store/locationAtom';
import { useSetAtom } from 'jotai';

import { LocationSearchData } from '../../models/locationSearchData';

interface LocationResultListProps {
  keyword?: string;
}

const LocationResultList = ({ keyword }: LocationResultListProps) => {
  const { push } = useHomeFlow();
  const setSelectedLocation = useSetAtom(setSelectedLocationAtom);
  const { locationSearchData } = useGetLocationSearch({
    query: keyword,
  });

  const handleCardClick = (location: LocationSearchData) => {
    setSelectedLocation({
      placeName: location.place_name,
      addressName: location.road_address_name ?? location.address_name,
      x: location.x,
      y: location.y,
    });
    push('LocationMapPreview', {});
  };

  return (
    <section className={'list-container'}>
      {locationSearchData &&
        locationSearchData.map((place, index) => (
          <LocationResultCard
            key={index}
            onClick={() => handleCardClick(place)}
            addressName={place.address_name}
            roadAddressName={place.road_address_name}
            placeName={place.place_name}
          />
        ))}
    </section>
  );
};

export default LocationResultList;
