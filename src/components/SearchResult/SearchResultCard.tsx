import React from 'react';

import Jmteng from '@assets/icons/Jmteng';
import verticalBarIcon from '@assets/icons/verticalBar.svg';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

import { Restaurant } from '../../models/getRestaurantData';
import { RestaurantDetail } from '../../models/getRestaurantDetail';

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
  width: 100px;
  height: 100px;
  background: url('@assets/mock/FoodMock.png'), lightgray 50% / cover no-repeat;
  border-radius: 10px;
  margin-right: 1.6rem;
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
  restaurantInfo: Restaurant | RestaurantDetail;
  onClick?: () => void;
}

const SearchResultCard = ({
  restaurantInfo,
  onClick,
}: SearchResultCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <ImgBox>
        <Jmteng />
      </ImgBox>
      <ContentsBox>
        <span className={classNames('text-l-bold', 'gray900')}>
          {restaurantInfo.name}
        </span>
        <Detail>
          <span className={classNames('text-m-medium', 'gray700')}>
            내 위치에서 100m
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
};

export default SearchResultCard;
