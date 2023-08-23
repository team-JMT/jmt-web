import React from 'react';

import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 2px solid ${colors.gray100};
  //  text eclipse
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-clamp: 1;
  }
`;

interface SearchLocationLogCardProps {
  children?: React.ReactNode;
}

const SearchLocationLogCard = ({ children }: SearchLocationLogCardProps) => {
  return (
    <Container>
      <span className={classNames('text-l-bold', 'gray900')}>{children}</span>
    </Container>
  );
};

export default SearchLocationLogCard;
