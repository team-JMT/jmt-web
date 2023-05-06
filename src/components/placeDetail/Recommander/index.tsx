import React from 'react';

import {
  Text,
  MenuContainer,
  MenuItem,
  GrayBox,
  GrayBar,
  UserWrapper,
  UserImg,
  UserText,
} from './styled';
const recomandMenuMock = [
  '마라탕',
  '마라샹궈',
  '마라밥',
  '마라',
  '마라볶음밥',
  '마라전골',
];
const Recommander = () => {
  return (
    <>
      <Text className={'text-m-medium'}>추천메뉴</Text>
      <MenuContainer>
        {recomandMenuMock.map((menu, index) => (
          <MenuItem key={index} className={'text-m-medium'}>
            {menu}
          </MenuItem>
        ))}
      </MenuContainer>
      <Text className={'text-m-medium'}>술과 함께 즐길 수 있어요</Text>
      <GrayBox className={'text-l-medium'}>소주랑 먹으면 죽여요</GrayBox>
      <GrayBar />
      <UserWrapper>
        <UserImg />
        <UserText>
          <div className={'title-s-bold'}>asdfdf</div>
          <div className={'text-s-medium'}>as</div>
        </UserText>
      </UserWrapper>
      <GrayBar />
      <Text className={'text-m-medium'}>멤버의 추천 한마디</Text>
      <div className={'text-l-medium'}>
        너무 맛있어서 키절 안먹으면 바보 안녕하세요? 너무 맛있어서 키절 안먹으면
        바보 안녕하세요? 너무 맛있어서 키절 안먹으면 바보 안녕하세요?너 무
        맛있어서 키절 안먹으면 바보 안녕하세요?너무 맛있어서 키절 안먹으면 바보
        안녕하세요?너무 맛있어서 키절 안먹으면 바보 안녕하세요?너무 맛있어서
        키절 안먹으면 바보 안녕하세요?너무 맛있어서 키절
      </div>
    </>
  );
};

export default Recommander;
