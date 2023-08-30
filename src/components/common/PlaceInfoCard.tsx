import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  width: 100%;
  padding: 24px 20px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px rgba(22, 26, 29, 0.08);
  margin: 0 20px;
`;
export const PlaceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
interface PlaceInfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  placeName?: string;
  addressName?: string;
  image?: string;
}

const PlaceInfoCard = ({
  placeName,
  addressName,
  image,
  ...rest
}: PlaceInfoCardProps) => {
  return (
    <CardContainer {...rest}>
      <PlaceContent>
        <span className={'title-s-medium'}>{placeName}</span>
        <span className={classNames('text-l-medium', 'gray500')}>
          {addressName}
        </span>
      </PlaceContent>
    </CardContainer>
  );
};

export default PlaceInfoCard;
