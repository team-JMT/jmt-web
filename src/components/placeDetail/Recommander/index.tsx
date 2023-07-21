import React from 'react';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';

import getUrlValue from '@utils/getUrlValue';

import {
  Text,
  MenuContainer,
  MenuItem,
  GrayBox,
  GrayBar,
  UserWrapper,
  UserImg,
  UserText,
  Introduce,
} from './styled';

const Recommander = () => {
  const detailId = getUrlValue();
  const { DetailData } = useGetRestaurantDetailData(detailId);
  const str = DetailData?.recommendMenu;
  const recommendMenuArray = str
    ?.split('#')
    .filter((item: string) => item !== '');

  return (
    <>
      <Text className={'text-m-medium'}>추천메뉴</Text>
      <MenuContainer>
        {recommendMenuArray?.map((menu: string, index: number) => (
          <MenuItem key={index} className={'text-m-medium'}>
            {menu}
          </MenuItem>
        ))}
      </MenuContainer>
      {DetailData?.canDrinkLiquor && (
        <>
          <br /> <br />
          <Text className={'text-m-medium'}>술과 함께 즐길 수 있어요 🍻</Text>
          <GrayBox className={'text-l-medium'}>
            {DetailData?.goWellWithLiquor}와(과) 먹으면 죽는 맛 입니다!
          </GrayBox>
        </>
      )}
      <GrayBar />
      <UserWrapper>
        <UserImg />
        <UserText>
          <div className={'title-s-bold'}>asdfdf</div>
          <div className={'gray'}>as</div>
        </UserText>
      </UserWrapper>
      <GrayBar />
      <Text className={'text-m-medium'}>멤버의 추천 한마디 ✍️</Text>
      <Introduce className={'text-l-medium'}>{DetailData?.introduce}</Introduce>
    </>
  );
};

export default Recommander;
