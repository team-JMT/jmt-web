import React from 'react';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import NaverMapProp from '@components/common/NaverMapProp';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

import getUrlValue from '@hooks/getUrlValue';

const Information = () => {
  const detailId = getUrlValue();
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
        <p className={classNames('text-l-bold', 'gray900')}>
          {DetailData?.roadAddress}
        </p>
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
const AddressCopy = styled.div`
  text-decoration: underline;
  color: ${colors.gray400};
`;
const Telephone = styled.div`
  margin: 8px 0 20px 0;
  color: ${colors.gray600};
`;
export default Information;
