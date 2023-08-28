import React, { MouseEvent, useRef } from 'react';

import { useGetLocationSearch } from '@apis/hooks/location/useGetLocationSearch';
import LocationPreviewCard from '@components/locationSearch/LocationPreviewCard';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addLocationSearchLogAtom } from '@store/locationAtom';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';

import useDebounce from '@hooks/useDebounce';

import { LocationSearchData } from '../../models/locationSearchData';

interface SearchResultProps {
  inputValue?: string;
}

const LocationSearchPreview = ({ inputValue }: SearchResultProps) => {
  const { push, pop } = useHomeFlow();
  const addLocationSearchLog = useSetAtom(addLocationSearchLogAtom);
  const debouncedValue = useDebounce(inputValue, 500);
  const observeRef = useRef<HTMLDivElement>(null);

  const { locationSearchData } = useGetLocationSearch({
    query: debouncedValue,
  });
  const onSearch =
    (e: MouseEvent<HTMLDivElement>) => (place: LocationSearchData) => {
      e.stopPropagation();
      setTimeout(() => {
        const encodeName = encodeURI(place.place_name);
        push('LocationResult', {
          keyword: encodeName,
        });
        addLocationSearchLog({ name: place.place_name });
      }, 0);
    };

  return (
    <motion.div variants={fadeInOut} {...variantKey}>
      {locationSearchData &&
        locationSearchData.map((place, index) => (
          <LocationPreviewCard
            inputValue={inputValue}
            place_name={place.place_name}
            onClick={(e) => onSearch(e)(place)}
            key={index}
          />
        ))}
    </motion.div>
  );
};

export default LocationSearchPreview;
