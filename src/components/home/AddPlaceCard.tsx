import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

import FoodImage from '../../assets/images/HomeFood.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(22, 26, 29, 0.08);
  border-radius: 10px;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.4rem 1.6rem 2.4rem 2rem;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  width: fit-content;
  color: ${colors.white};
  background: ${colors.main500};
  padding: 0.8rem 1.6rem;
`;

const AddPlaceCard = () => {
  return (
    <Container>
      <LeftSection>
        <span className={'title-s-bold'}>여기, 혼자 먹기엔 너무 맛있다면?</span>
        <Button className={'text-m-medium'}>맛집 등록하기</Button>
      </LeftSection>
      <img src={FoodImage} alt={'hamburger'} />
    </Container>
  );
};

export default AddPlaceCard;
