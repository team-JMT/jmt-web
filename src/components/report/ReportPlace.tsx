import React from 'react';

//import Jmteng from '@assets/icons/Jmteng';
import verticalBarIcon from '@assets/icons/verticalBar.svg';
//import { FoodMock } from '@assets/images/foodMock';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

import { RestaurantDetail } from '../../models/getRestaurantDetail';

const calculateDistance = (distance: number) => {
  if (distance >= 1000) {
    return (distance / 1000).toFixed(2) + 'km';
  } else if (distance < 1000) {
    return distance + 'm';
  } else {
    return '??m';
  }
};

interface ReportPlaceProps {
  restaurantInfo: RestaurantDetail;
  onClick?: () => void;
}

const ReportPlace = ({ restaurantInfo, onClick }: ReportPlaceProps) => {
  if (restaurantInfo === undefined) {
    return <>카드 오류에요</>;
  } else {
    const distance = parseInt(restaurantInfo.differenceInDistance);

    return (
      <CardContainer onClick={onClick}>
        <ImgBox>
          <RestaurantImage
            src={
              restaurantInfo.pictures[0]
              // FoodMock[restaurantInfo.category as keyof typeof FoodMock] ??
              // FoodMock.CAFE
            }
          />
          {/* <Jmteng /> */}
        </ImgBox>
        <ContentsBox>
          <span className={classNames('text-l-bold', 'gray900')}>
            {restaurantInfo.name}
          </span>
          <Detail>
            <span className={classNames('text-m-medium', 'gray700')}>
              내 위치에서 {calculateDistance(distance)}
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

export default ReportPlace;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
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
