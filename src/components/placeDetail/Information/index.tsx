import React from 'react';

//import { css } from '@emotion/react';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import NaverMapProp from '@components/common/NaverMapProp';
import styled from '@emotion/styled';
import { detailAtom } from '@store/DetailAtom';
import { useAtom } from 'jotai';

const Information = () => {
  const [detailId] = useAtom(detailAtom);
  const { DetailData } = useGetRestaurantDetailData(detailId);

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <>
      <MapContainer>
        <NaverMapProp x={DetailData!.x} y={DetailData!.y} />
      </MapContainer>
      <AddressConatiner>
        <AddressInfo className={'text-l-bold'}>
          {DetailData?.roadAddress}
        </AddressInfo>
        <AddressCopy
          className={'text-s-medium'}
          onClick={() => copyToClipboard(DetailData!.roadAddress)}
        >
          주소복사
        </AddressCopy>
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
