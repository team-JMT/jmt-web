import React, { MouseEvent, useRef } from 'react';

import { useGetLocationSearchInfinite } from '@apis/hooks/location/useGetLocationSearchInfinite';
import LocationPreviewCard from '@components/changeLocation/LocationPreviewCard';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addSearchLogAtom } from '@store/searchLogAtom';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';

import useDebounce from '@hooks/useDebounce';
import { useInsertionObserver } from '@hooks/useInsertionObserver';

import { Restaurant } from '../../models/getRestaurantData';

interface SearchResultProps {
  inputValue?: string;
}

const LocationSearchPreview = ({ inputValue }: SearchResultProps) => {
  const { push, pop } = useHomeFlow();
  const addSearchLog = useSetAtom(addSearchLogAtom);
  const debouncedValue = useDebounce(inputValue, 500);
  const observeRef = useRef<HTMLDivElement>(null);

  // TODO 변경필요
  const { locationSearchData, fetchNextPage } = useGetLocationSearchInfinite({
    query: debouncedValue,
  });
  const onSearch = (e: MouseEvent<HTMLDivElement>) => (place: Restaurant) => {
    e.stopPropagation();
    setTimeout(() => {
      const decodeName = encodeURI(place.name);
      push('SearchResult', {
        keyword: decodeName,
      });
      addSearchLog({ name: place.name });
    }, 0);
  };

  const mappingRestaurantSearch = locationSearchData
    ?.flatMap((data) => data.data.data)
    .map((data) => data);

  console.log(mappingRestaurantSearch);

  const isLastPage = () => {
    if (!locationSearchData) {
      return null;
    }
    // return locationSearchData[0].data.page.pageLast;
  };

  const handleIntersect = () => {
    const isLast = isLastPage();
    if (isLast === null) {
      return;
    }
    if (!isLast) {
      fetchNextPage();
    }
  };

  // 무한 스크롤 로직
  useInsertionObserver<HTMLDivElement>({
    observeRef,
    onIntersect: handleIntersect,
  });

  return (
    <motion.div variants={fadeInOut} {...variantKey}>
      {mappingRestaurantSearch &&
        mappingRestaurantSearch.map((place, index) => (
          <LocationPreviewCard
            inputValue={inputValue}
            place_name={place.place_name}
            onClick={(e) => onSearch(e)(place)}
            key={index}
          />
        ))}
      {/*{!isLastPage() && (*/}
      {/*  <div className={'infinite-observer'} ref={observeRef} />*/}
      {/*)}*/}
    </motion.div>
  );
};

export default LocationSearchPreview;
