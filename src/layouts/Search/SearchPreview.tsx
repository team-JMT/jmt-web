import React, { useRef } from 'react';

import { useGetRestaurantSearchDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantSearchDataInfinite';
import { fadeInOut } from '@components/motion/fade-in-out';
import { variantKey } from '@components/motion/variantKey';
import PlaceInfoCard from '@components/search/PlaceInfoCard';
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
const SearchPreview = ({ inputValue }: SearchResultProps) => {
  const { push, pop } = useHomeFlow();
  const addSearchLog = useSetAtom(addSearchLogAtom);
  const debouncedValue = useDebounce(inputValue, 500);
  const observeRef = useRef<HTMLDivElement>(null);

  const { restaurantSearchData, fetchNextPage } =
    useGetRestaurantSearchDataInfinite(debouncedValue);
  const onSearch = (place: Restaurant) => {
    const decodeName = encodeURI(place.name);

    push('SearchResult', {
      keyword: decodeName,
    });
    addSearchLog({ name: place.name });
  };

  const mappingRestaurantSearch = restaurantSearchData
    ?.flatMap((data) => data.data.restaurants)
    .map((data) => data);

  const isLastPage = () => {
    if (!restaurantSearchData) {
      return null;
    }
    return (
      restaurantSearchData[0].data.page.currentPage ===
      restaurantSearchData[0].data.page.totalPage
    );
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
          <div onClick={() => onSearch(place)} key={place.id}>
            <PlaceInfoCard {...place} />
          </div>
        ))}
      {!isLastPage() && (
        <div className={'infinite-observer'} ref={observeRef} />
      )}
    </motion.div>
  );
};

export default SearchPreview;
