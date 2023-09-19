import React, { MouseEvent } from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

import { highlightText } from '@utils/highlightText';

import { LocationSearchData } from '../../models/locationSearchData';

interface LocationPreviewCardProps
  extends Pick<LocationSearchData, 'place_name'> {
  inputValue?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
const LocationPreviewCard = ({
  place_name,
  inputValue,
  onClick,
}: LocationPreviewCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <span className={'text-l-bold'}>
        {highlightText(place_name, inputValue)}
      </span>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  padding: 16px 20px;
  cursor: pointer;
  border-bottom: 2px solid ${colors.gray100};
`;

export default LocationPreviewCard;
