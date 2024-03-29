import React, { MouseEvent } from 'react';

import { useGetRestaurantSearchDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantSearchDataInfinite';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import PlaceInfoCard from '@components/search/PlaceInfoCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { getCurrentLocationAtom } from '@store/locationAtom';
import { addSearchLogAtom } from '@store/searchLogAtom';
import { motion } from 'framer-motion';
import { useSetAtom, useAtomValue } from 'jotai';

import useDebounce from '@hooks/useDebounce';
import { useInsertionObserver } from '@hooks/useInsertionObserver';

import { Restaurant } from '../../models/getRestaurantData';

interface SearchResultProps {
  inputValue?: string;
}
const SearchPreview = ({ inputValue }: SearchResultProps) => {
  const { push, pop } = useHomeFlow();
  const addSearchLog = useSetAtom(addSearchLogAtom);
  const debouncedValue = useDebounce(inputValue, 500);

  const { x, y } = useAtomValue(getCurrentLocationAtom);

  const { restaurantSearchData, fetchNextPage } =
    useGetRestaurantSearchDataInfinite({
      keyword: debouncedValue!,
      userLocation: {
        x,
        y,
      },
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

  const mappingRestaurantSearch = restaurantSearchData
    ?.flatMap((data) => data.data.restaurants)
    .map((data) => data);

  const isLastPage = () => {
    if (!restaurantSearchData) {
      return null;
    }
    return restaurantSearchData[restaurantSearchData.length - 1].data.page
      .pageLast;
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
  const { setObserveElement } = useInsertionObserver<HTMLDivElement>({
    onIntersect: handleIntersect,
  });

  return (
    <motion.div variants={fadeInOut} {...variantKey}>
      {mappingRestaurantSearch &&
        mappingRestaurantSearch.map((place, index) => (
          <PlaceInfoCard
            {...place}
            inputValue={inputValue}
            onClick={(e) => onSearch(e)(place)}
            key={place.id}
          />
        ))}
      {!isLastPage() && (
        <div className={'infinite-observer'} ref={setObserveElement} />
      )}
    </motion.div>
  );
};

export default SearchPreview;
