import React, { useRef } from 'react';

import { useGetRestaurantSearchDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantSearchDataInfinite';
import PlaceInfoCard from '@components/search/PlaceInfoCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addSearchLogAtom } from '@store/searchLogAtom';
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
    addSearchLog({ name: place.name, id: String(place.id) });
  };

  const mappingRestaurantSearch = restaurantSearchData
    ?.flatMap((data) => data.data.restaurants)
    .map((data) => data);

  const isLastPage = () => {
    if (!restaurantSearchData) {
      return;
    }
    return restaurantSearchData[0].data.page.pageLast;
  };

  const handleIntersect = () => {
    if (isLastPage()) {
      fetchNextPage();
    }
  };

  // 무한 스크롤 로직
  useInsertionObserver<HTMLDivElement>({
    observeRef,
    onIntersect: handleIntersect,
  });

  return (
    <div>
      {mappingRestaurantSearch &&
        mappingRestaurantSearch.map((place, index) => (
          <div onClick={() => onSearch(place)} key={place.id}>
            <PlaceInfoCard {...place} />
          </div>
        ))}
      {!isLastPage() && (
        <div className={'infinite-observer'} ref={observeRef} />
      )}
    </div>
  );
};

export default SearchPreview;
