import React from 'react';

import verticalBarIcon from '@assets/icons/verticalBar.svg';
//import { FoodMock } from '@assets/images/foodMock';
import classNames from 'classnames';

import calculateDistance from '@utils/calculateDistance';
import distanceConverter from '@utils/distanceConverter';
import { nativeInfo } from '@utils/storage';

import { Restaurant } from '../../models/getRestaurantData';

import {
  CardContainer,
  ContentsBox,
  Detail,
  ImgBox,
  RestaurantImage,
  User,
  UserImg,
} from './styled';

interface SearchResultCardProps {
  restaurantInfo: Restaurant;
  onClick?: () => void;
}

const SearchResultCard = ({
  restaurantInfo,
  onClick,
}: SearchResultCardProps) => {
  if (restaurantInfo === undefined) {
    return <>카드 오류에요</>;
  } else {
    const existDistance = () => {
      let distance: number;
      if (restaurantInfo.differenceInDistance === '') {
        const userLocation = nativeInfo.getData().userPosition;
        const location = {
          userPositionX: userLocation.x,
          userPositionY: userLocation.y,
          placeX: restaurantInfo.x,
          placeY: restaurantInfo.y,
        };
        distance = calculateDistance(location);
      } else {
        distance = parseInt(restaurantInfo.differenceInDistance);
      }
      return distanceConverter(distance);
    };

    return (
      <CardContainer onClick={onClick}>
        <ImgBox>
          <RestaurantImage
            src={
              restaurantInfo.restaurantImageUrl
              // FoodMock[restaurantInfo.category as keyof typeof FoodMock] ??
              // FoodMock.CAFE
            }
          />
        </ImgBox>
        <ContentsBox>
          <span className={classNames('text-l-bold', 'gray900')}>
            {restaurantInfo.name}
          </span>
          <Detail>
            <span className={classNames('text-m-medium', 'gray700')}>
              내 위치에서 {existDistance()}
            </span>
            <img src={verticalBarIcon} />
            <span className={classNames('text-m-medium', 'gray700')}>
              {restaurantInfo.category}
            </span>
          </Detail>
          <User>
            <UserImg src={restaurantInfo.userProfileImageUrl} />
            <span className={classNames('text-s-medium')}>
              {restaurantInfo.userNickName}
            </span>
          </User>
        </ContentsBox>
      </CardContainer>
    );
  }
};

export default SearchResultCard;
