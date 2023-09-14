import React from 'react';

import Jmteng from '@assets/icons/Jmteng';
import verticalBarIcon from '@assets/icons/verticalBar.svg';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

import { Restaurant } from '../../models/getRestaurantData';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  & + & {
    margin-top: 20px;
  }
`;
const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 100px;
  background: url('@assets/mock/FoodMock.png'), lightgray 50% / cover no-repeat;
  border-radius: 10px;
  margin-right: 1.6rem;
`;

const PlaceName = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
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
const UserImg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: url('link'), ${colors.gray200} 0% / cover no-repeat;
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
  return (
    <CardContainer onClick={onClick}>
      <ImgBox>
        <Jmteng />
      </ImgBox>
      <ContentsBox>
        <PlaceName className={classNames('text-l-bold', 'gray900')}>
          {restaurantInfo.name}
        </PlaceName>
        <Detail>
          <span className={classNames('text-m-medium', 'gray700')}>
            내 위치에서 100m
          </span>
          <img src={verticalBarIcon} />
          <span className={classNames('text-m-medium', 'gray700')}>카테</span>
        </Detail>
        <User>
          <UserImg />
          <span className={classNames('text-s-medium')}>유저이름</span>
        </User>
      </ContentsBox>
    </CardContainer>
  );
};

export default SearchResultCard;
