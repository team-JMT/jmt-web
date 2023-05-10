import React from 'react';

//import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Information = () => {
  return (
    <>
      <MapContainer></MapContainer>
      <AddressConatiner>
        <AddressInfo className={'text-l-bold'}>
          서울시 어쩌구 저쩌구 123 32
        </AddressInfo>
        <AddressCopy className={'text-s-medium'}>주소복사</AddressCopy>
      </AddressConatiner>
      <Telephone className={'text-m-medium'}>02-1234-5678</Telephone>
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
