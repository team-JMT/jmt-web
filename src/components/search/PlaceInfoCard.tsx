import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

import { Restaurant } from '../../models/getRestaurantData';

interface PlaceInfoCardProps extends Restaurant {
  onClick?: () => void;
}
const PlaceInfoCard = ({ name, address, onClick }: PlaceInfoCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <div className={'text-l-bold'}>{name}</div>
      <div className={'text-m-medium'}>내 위치에서 100m</div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  padding: 16px 20px;
  cursor: pointer;
  border-bottom: 2px solid ${colors.gray100};
`;

export default PlaceInfoCard;
