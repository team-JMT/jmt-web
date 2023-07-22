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
  margin-top: 1.4rem;
`;

const BottomSheetHeader = () => {
  const { push } = useHomeFlow();
  return (
    <Container>
      <AddressButton>서울시 어쩌고 저쩌고</AddressButton>
      <SearchInputMock
        placeholder={'음식이나 식당명을 검색하세요'}
        onClick={() => push('Search', {})}
      />
    </Container>
  );
};

export default BottomSheetHeader;
