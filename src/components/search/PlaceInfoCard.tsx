import React from 'react';
import './PlaceInfoCard.scss';

interface PlaceInfoCardProps {
  name: string;
  address: string;
  distance: number;
  onClick?: () => void;
}
const PlaceInfoCard = ({
  name,
  address,
  distance,
  onClick,
}: PlaceInfoCardProps) => {
  return (
    <div className={'card-container'} onClick={onClick}>
      <div className={'text-l-bold'}>{name}</div>
      <div className={'text-m-medium'}>내 위치에서{distance}m</div>
      <div className={'text-m-medium'}>{address}</div>
    </div>
  );
};

export default PlaceInfoCard;
