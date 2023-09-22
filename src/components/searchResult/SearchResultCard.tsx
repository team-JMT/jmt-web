import React from 'react';

import verticalBarIcon from '@assets/icons/verticalBar.svg';
//import { FoodMock } from '@assets/images/foodMock';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

import { Restaurant } from '../../models/getRestaurantData';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  /* & + & {
    margin-top: 20px;
  } */
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 100px;
  margin-right: 1.6rem;
`;
const RestaurantImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Detail = styled.div`
  display: flex;
  margin: 2px 0 8px;
  gap: 12px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.gray200} 0% / cover no-repeat;
  margin-right: 4px;
`;

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
    const distance = parseInt(restaurantInfo.differenceInDistance);
    const calculateDistance = () => {
      return '??m';
      //유저 위치 받아와서 계산한 뒤 반환필요
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
              내 위치에서 {calculateDistance()}
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
