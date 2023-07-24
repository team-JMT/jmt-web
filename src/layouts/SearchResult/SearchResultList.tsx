import React, { useRef } from 'react';

import { useGetRestaurantSearchDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantSearchDataInfinite';
import SearchResultCard from '@components/SearchResult/SearchResultCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addSearchLogAtom } from '@store/searchLogAtom';
import { useSetAtom } from 'jotai/index';

import { useInsertionObserver } from '@hooks/useInsertionObserver';

interface SearchResultListProps {
  keyword?: string;
}

const SearchResultList = ({ keyword }: SearchResultListProps) => {
  const { push } = useHomeFlow();
  const addSearchLog = useSetAtom(addSearchLogAtom);

  const observeRef = useRef<HTMLDivElement>(null);

  const { restaurantSearchData, fetchNextPage } =
    useGetRestaurantSearchDataInfinite(keyword);

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
    <section className={'list-container'}>
      {mappingRestaurantSearch &&
        mappingRestaurantSearch.map((place, index) => (
          <SearchResultCard
            restaurantInfo={place}
            key={place.id}
            onClick={() => push('PlaceDetail', { placeId: String(place.id) })}
          />
        ))}
      {!isLastPage() && (
        <div className={'infinite-observer'} ref={observeRef} />
      )}
    </section>
  );
};

export default SearchResultList;
