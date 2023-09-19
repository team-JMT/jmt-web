import React from 'react';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

import useGetRestaurantDetailData from '@apis/hooks/restaurant/useGetRestaurantDetailData';
import CopyIcon from '@assets/icons/CopyIcon';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

import getUrlValue from '@utils/getUrlValue';

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
      <MapDiv
        style={{
          height: 180,
        }}
      >
        <NaverMap>
          <Marker
            defaultPosition={{ lat: DetailData!.y, lng: DetailData!.x }}
          />
        </NaverMap>
      </MapDiv>
      <AddressConatiner>
        <p className={classNames('text-l-bold', 'gray900')}>
          {DetailData?.roadAddress}
        </p>
        <AddressCopy onClick={() => copyToClipboard(DetailData!.roadAddress)}>
          <CopyIcon />
          <p className={'text-s-medium'}>주소복사</p>
        </AddressCopy>
      </AddressConatiner>
      <Telephone className={'text-m-medium'}>{DetailData?.phone}</Telephone>
    </>
  );
};

const AddressConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  p {
    margin-top: 1px;
  }
`;
const AddressCopy = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray400};
  border-bottom: 1px solid ${colors.gray400};
  line-height: 100%;
  padding-right: 3px;
`;
const Telephone = styled.div`
  margin: 4px 0 20px 0;
  color: ${colors.gray600};
`;
export default Information;
