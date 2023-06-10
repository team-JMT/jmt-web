import React from 'react';

import { useGetRestaurantSearchData } from '@apis/hooks/restaurant/useGetRestaurantSearchData';
import PlaceInfoCard from '@components/search/PlaceInfoCard';
import { useHomeFlow } from '@stacks/homeStackFlow';
import { addSearchLogAtom } from '@store/searchLogAtom';
import { useSetAtom } from 'jotai';

import useDebounce from '@hooks/useDebounce';

import { searchResultMock } from '../../mocks/searchResult';
import { Restaurant } from '../../models/getRestaurantData';

interface SearchResultProps {
  inputValue?: string;
}
const SearchPreview = ({ inputValue }: SearchResultProps) => {
  const { push, pop } = useHomeFlow();
  const addSearchLog = useSetAtom(addSearchLogAtom);
  const debouncedValue = useDebounce(inputValue, 500);

  const { restaurantSearchData } = useGetRestaurantSearchData(debouncedValue);
  const onSearch = (place: Restaurant) => {
    push('SearchResult', { keyword: place.id });
    addSearchLog({ name: place.name, id: String(place.id) });
  };

  return (
    <section className={'list-container'}>
      {searchResultMock.map((place, index) => (
        <PlaceInfoCard {...place} key={index} onClick={() => onSearch(place)} />
      ))}
    </section>
  );
};

export default SearchPreview;
