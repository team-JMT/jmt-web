import React, { MouseEvent } from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

import { highlightText } from '@utils/highlightText';

import { Restaurant } from '../../models/getRestaurantData';

interface PlaceInfoCardProps extends Restaurant {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  inputValue?: string;
}
const PlaceInfoCard = ({
  name,
  address,
  onClick,
  inputValue,
}: PlaceInfoCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <div className={'text-l-bold'}>{highlightText(name, inputValue)}</div>
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
