import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;
export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 100px;
  margin-right: 1.6rem;
`;
export const RestaurantImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Detail = styled.div`
  display: flex;
  margin: 2px 0 8px;
  gap: 12px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.gray200} 0% / cover no-repeat;
  margin-right: 4px;
`;
