import React from 'react';

import { SearchInputMock } from '@commons/input/SearchInput';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';

import { useHomeFlow } from '../../stacks/homeStackFlow';

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.white};
  padding-top: 4px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  gap: 1.6rem;
`;

const HomeHeader = () => {
  const { push } = useHomeFlow();
  return (
    <Container>
      <SearchInputMock
        placeholder={'음식이나 식당명을 검색하세요'}
        onClick={() => push('Search', {})}
      />
    </Container>
  );
};

export default HomeHeader;
