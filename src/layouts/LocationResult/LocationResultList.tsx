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
      placeName: location.placeName,
      addressName: location.roadAddressName ?? location.addressName,
      x: location.x,
      y: location.y,
    });
    push('LocationMapPreview', {});
  };

  console.log(locationSearchData);

  return (
    <section className={'list-container'}>
      {locationSearchData &&
        locationSearchData.map((place, index) => (
          <LocationResultCard
            key={index}
            onClick={() => handleCardClick(place)}
            addressName={place.addressName}
            roadAddressName={place.roadAddressName}
            placeName={place.placeName}
          />
        ))}
    </section>
  );
};

export default LocationResultList;
