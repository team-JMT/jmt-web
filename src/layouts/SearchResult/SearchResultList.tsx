import React, { useRef } from 'react';

import { useGetRestaurantSearchDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantSearchDataInfinite';
import SadImage from '@assets/icons/SadImage';
import IconNotice from '@commons/IconNotice';
import SearchResultCard from '@components/searchResult/SearchResultCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addSearchLogAtom } from '@store/searchLogAtom';
import classNames from 'classnames';
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

  if (mappingRestaurantSearch?.length === 0) {
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
      {mappingRestaurantSearch &&
        mappingRestaurantSearch.map((place, index) => (
          <SearchResultCard
            restaurantInfo={place}
            key={place.id}
            onClick={() => push('PlaceDetail', { placeId: String(place.id) })}
          />
        ))}
      {!isLastPage() && (
        <div className={'infinite-observer'} ref={setObserveElement} />
      )}
    </section>
  );
};

export default SearchResultList;
