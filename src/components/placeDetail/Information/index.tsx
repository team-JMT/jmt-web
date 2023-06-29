import React from 'react';

//import { css } from '@emotion/react';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import styled from '@emotion/styled';
const id = 1;

const Information = () => {
  const { DetailData } = useGetRestaurantDetailData(id);

  return (
    <>
      <MapContainer></MapContainer>
      <AddressConatiner>
        <AddressInfo className={'text-l-bold'}>
          {DetailData?.roadAddress}
        </AddressInfo>
        <AddressCopy className={'text-s-medium'}>주소복사</AddressCopy>
      </AddressConatiner>
      <Telephone className={'text-m-medium'}>{DetailData?.phone}</Telephone>
    </>
  );
};

const MapContainer = styled.div`
  height: calc(53vw);
  background: gray;
`;
const AddressConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;
const AddressInfo = styled.div`
  /* gray900 */
  color: #161a1d;
`;
const AddressCopy = styled.div`
  margin-top: 2px;
  text-decoration: underline;
  /* gray400 */
  color: #9aa9b2;
`;
const Telephone = styled.div`
  margin: 8px 0 20px 0;
  /* gray600 */
  color: #637782;
`;
export default Information;
