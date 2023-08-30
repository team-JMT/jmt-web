import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px 20px;
  gap: 4px;
  border-bottom: 2px solid ${colors.gray100};
`;

const PlaceName = styled.span`
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PlaceAddress = styled.span`
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface LocationResultCardProps extends React.HTMLAttributes<HTMLDivElement> {
  placeName?: string;
  addressName?: string;
  roadAddressName?: string;
}

const LocationResultCard = ({
  placeName,
  addressName,
  roadAddressName,
  ...rest
}: LocationResultCardProps) => {
  return (
    <Container {...rest}>
      <PlaceName className={classNames('text-l-bold', 'gray900')}>
        {placeName}
      </PlaceName>
      <PlaceAddress className={classNames('text-m-medium', 'gray500')}>
        {roadAddressName ?? addressName}
      </PlaceAddress>
    </Container>
  );
};

export default LocationResultCard;
