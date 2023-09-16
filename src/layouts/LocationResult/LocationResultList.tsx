import React from 'react';

import { useGetLocationSearch } from '@apis/hooks/location/useGetLocationSearch';
import SadImage from '@assets/icons/SadImage';
import IconNotice from '@commons/IconNotice';
import LocationResultCard from '@components/locationResult/LocationResultCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { setSelectedLocationAtom } from '@store/locationAtom';
import classNames from 'classnames';
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
  if (locationSearchData?.length === 0) {
    return (
      <section className={'list-center'}>
        <IconNotice
          image={<SadImage />}
          text={
            <span className={classNames('text-l-bold', 'gray300')}>
              검색 결과가 없어요
            </span>
          }
        />
      </section>
    );
  }

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
