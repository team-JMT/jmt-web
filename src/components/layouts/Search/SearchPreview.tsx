import React from 'react';

import { useGetRestaurantSearchData } from '@apis/hooks/restaurant/useGetRestaurantSearchData';
import PlaceInfoCard from '@components/search/PlaceInfoCard';

import { useHomeFlow } from '../../../stacks/homeStackFlow';

const placeListMock = [
  {
    name: '맛집1',
    address: '서울시 강남구',
    distance: 100,
  },
  {
    name: '맛집2',
    address: '서울시 강남구',
    distance: 100,
  },
  {
    name: '맛집3',
    address: '서울시 강남구',
    distance: 100,
  },
];

interface SearchResultProps {
  inputValue?: string;
}
const SearchPreview = ({ inputValue }: SearchResultProps) => {
  const { push, pop } = useHomeFlow();

  const { restaurantSearchData } = useGetRestaurantSearchData(inputValue);
  const onSearch = () => {
    push('SearchResult', { keyword: 'inputValue' });
  };
  console.log(restaurantSearchData);
  return (
    <section className={'list-container'}>
      {placeListMock.map((place, index) => (
        <PlaceInfoCard {...place} key={index} onClick={onSearch} />
      ))}
    </section>
  );
};

export default SearchPreview;
