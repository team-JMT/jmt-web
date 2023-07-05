import React from 'react';

import { Restaurant } from '../../models/getRestaurantData';

interface PlaceDetailCardProps {
  restaurant: Restaurant;
}

const PlaceDetailCard = ({ restaurant }: PlaceDetailCardProps) => {
  return <div>{restaurant.name}</div>;
};

export default PlaceDetailCard;
