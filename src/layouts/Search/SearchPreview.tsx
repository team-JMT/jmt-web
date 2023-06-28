import React from 'react';

import { useGetRestaurantSearchDataInfinite } from '@apis/hooks/restaurant/useGetRestaurantSearchDataInfinite';
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

  const { restaurantSearchData } =
    useGetRestaurantSearchDataInfinite(debouncedValue);
  const onSearch = (place: Restaurant) => {
    push('SearchResult', { keyword: place.name });
    addSearchLog({ name: place.name, id: String(place.id) });
  };

  console.log(restaurantSearchData?.restaurants);

  return (
    <section className={'list-container'}>
      {searchResultMock.map((place, index) => (
        <PlaceInfoCard {...place} key={index} onClick={() => onSearch(place)} />
      ))}
    </section>
  );
};

export default SearchPreview;
