import React from 'react';

import { FoodMock } from '@assets/images/foodMock';
import Prefix from '@assets/images/Prefix';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Restaurant } from '../../models/getRestaurantData';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 4px 16px 0px rgba(22, 26, 29, 0.08);
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
`;
export const RestaurantImage = styled.img`
  width: 100%;
`;
export const RestaurantImageOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const PlaceContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 12px 20px;
  background: ${colors.white};
  gap: 8px;
`;

const PlaceInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const PlaceSubInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

interface PlaceDetailCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
}

const PlaceDetailCard = ({ restaurant, onClick }: PlaceDetailCardProps) => {
  return (
    <Container onClick={onClick}>
      <ImageContainer>
        <RestaurantImageOverlay>
          <Prefix />
        </RestaurantImageOverlay>
        <RestaurantImage
          src={
            FoodMock[restaurant.category as keyof typeof FoodMock] ??
            FoodMock.CAFE
          }
        />
      </ImageContainer>
      <PlaceContentContainer>
        <PlaceInfoCard>
          <span className={classNames('gray900', 'text-l-bold')}>
            {restaurant.name}
          </span>
          <PlaceSubInfo>
            <span className={classNames('gray700', 'text-m-medium')}>
              내 위치에서 000m
            </span>
            <div className={'filter-divider'} />
            <span className={classNames('gray700', 'text-m-medium')}>
              {restaurant.category}
            </span>
          </PlaceSubInfo>
          <span className={classNames('gray700', 'text-s-medium')}>
            등록한 사람
          </span>
        </PlaceInfoCard>
      </PlaceContentContainer>
    </Container>
  );
};

export default PlaceDetailCard;
