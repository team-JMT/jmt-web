import React from 'react';

import { Keys } from '@apis/common/Keys';
import { queryClient } from '@apis/queryClient';
import RefreshIcon from '@assets/icons/RefreshIcon';
import SolidDownArrow from '@assets/icons/SolidDownArrow';
import { SearchInputMock } from '@commons/input/SearchInput';
import styled from '@emotion/styled';
import { colors } from '@styles/theme/color';
import classNames from 'classnames';

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
export const MyPlaceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  height: 44px;
  padding: 11px 20px 0 0;
  background: ${colors.white};
  cursor: pointer;
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
      <MyPlaceContainer onClick={() => push('LocationSearch', {})}>
        <span className={classNames('text-m-medium', 'gray900')}>
          서울특별시시 동대문구 전농동
        </span>
        <SolidDownArrow />
      </MyPlaceContainer>

      <RefreshIconWrapper onClick={handleRefresh}>
        <RefreshIcon />
      </RefreshIconWrapper>
    </Container>
  );
};

export default HomeHeader;
