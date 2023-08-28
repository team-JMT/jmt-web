import React from 'react';

import { useGetLocationSearch } from '@apis/hooks/location/useGetLocationSearch';
import LocationResultCard from '@components/locationResult/LocationResultCard';
import { useHomeFlow } from '@stacks/homeStackFlow';

interface LocationResultListProps {
  keyword?: string;
}

const LocationResultList = ({ keyword }: LocationResultListProps) => {
  const { push } = useHomeFlow();
  const { locationSearchData } = useGetLocationSearch({
    query: keyword,
  });
  return (
    <section className={'list-container'}>
      {locationSearchData &&
        locationSearchData.map((place, index) => (
          <LocationResultCard
            key={index}
            addressName={place.address_name}
            roadAddressName={place.road_address_name}
            placeName={place.place_name}
          />
        ))}
    </section>
  );
};

export default LocationResultList;
