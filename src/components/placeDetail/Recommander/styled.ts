import styled from '@emotion/styled';

import { colors } from '../../../styles/theme/color';

export const Text = styled.div`
  height: 21px;
  color: ${colors.gray700};
  margin-bottom: 12px;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;
export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  height: 33px;
  border: 1px solid ${colors.gray200};
  border-radius: 50px;
  padding: 6px 16px;
`;
export const GrayBox = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-radius: 10px;
  background: ${colors.gray100};
`;
export const GrayBar = styled.div`
  width: calc(100% + 40px);
  position: relative;
  left: -20px;
  height: 8px;
  margin: 22px 0;
  background: ${colors.gray100};
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 46px;
`;
export const UserImg = styled.div`
  width: 46px;
  height: 46px;
  margin-right: 12px;
  background: yellow; //url(.jpg);
  border-radius: 50px;
`;
export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  div {
    line-height: 150%;
  }
  .gray {
    /* gray500 */
    color: #7d909c;
    font-size: 12px;
    font-weight: 500;
  }
`;
