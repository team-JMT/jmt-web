import React from 'react';

import AddressButton from '@commons/button/AddressButton';
import { SearchInputMock } from '@commons/input/SearchInput';
import styled from '@emotion/styled';

import { useHomeFlow } from '../../stacks/homeStackFlow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  margin-top: 0.4rem;
  margin-bottom: 2.4rem;
`;

const BottomSheetHeader = () => {
  const { push } = useHomeFlow();
  return (
    <Container>
      <AddressButton>서울시 어쩌고 저쩌고</AddressButton>
      <SearchInputMock onClick={() => push('Search', {})}>
        음식이나 식당명을 검색하세요
      </SearchInputMock>
    </Container>
  );
};

export default BottomSheetHeader;
