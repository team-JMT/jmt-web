import React from 'react';

import { Keys } from '@apis/common/Keys';
import { queryClient } from '@apis/queryClient';
import RefreshIcon from '@assets/icons/RefreshIcon';
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
export const RefreshIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 128px;
  right: 20px;
  background: ${colors.white};
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const HomeHeader = () => {
  const { push } = useHomeFlow();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries([Keys.RESTAURANT]);
  };

  return (
    <Container>
      <SearchInputMock
        placeholder={'음식이나 식당명을 검색하세요'}
        onClick={() => push('Search', {})}
      />

      <RefreshIconWrapper onClick={handleRefresh}>
        <RefreshIcon />
      </RefreshIconWrapper>
    </Container>
  );
};

export default HomeHeader;
