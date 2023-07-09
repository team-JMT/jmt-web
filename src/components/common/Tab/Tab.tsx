import React, { useEffect, useId } from 'react';

import { TabContext, useTab } from '@commons/Tab/useTab';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, ColorToken } from '@styles/theme/color';
import { motion } from 'framer-motion';

interface TabRootProps {
  setState?: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  defaultId: string;
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const TabRoot = ({ children, defaultId, setState }: TabRootProps) => {
  const [value, setValue] = React.useState({
    id: defaultId || '',
    label: '',
  });
  const tabID = useId();

  useEffect(() => {
    if (setState) {
      setState(defaultId);
    }
  }, [defaultId]);

  useEffect(() => {
    if (setState) {
      setState(value.id);
    }
  }, [value]);

  return (
    <TabContext.Provider value={{ tabID, value, setValue }}>
      <RootContainer>{children}</RootContainer>
    </TabContext.Provider>
  );
};

const StyledTabContainer = styled(motion.div)`
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4.4rem;
`;
const StyledTab = styled(motion.div)<{ color: ColorToken; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray300};
  padding: 0.8rem 1rem;
  ${({ isActive, color }) =>
    isActive &&
    css`
      color: ${colors[color]};
    `};
  transition: all 0.2s ease-in-out;
`;
const StyledBottomBar = styled(motion.div)<{ color: ColorToken }>`
  position: relative;
  bottom: 0;
  display: flex;
  flex: 1;
  height: 0.2rem;
  background: ${({ color }) => colors[color]};
`;

interface TabItemProps {
  id: string;
  color?: ColorToken;
  children?: React.ReactNode;
}

const Tab = ({ id, color = 'main500', children }: TabItemProps) => {
  const { value, tabID, setValue } = useTab();
  const isActive = value.id === id;

  const handleClick = () => {
    setValue({ id, label: '' });
  };

  return (
    <StyledTabContainer onClick={handleClick}>
      <StyledTab color={color} className={'text-m-bold'} isActive={isActive}>
        {children}
      </StyledTab>
      {isActive && (
        <StyledBottomBar color={color} layoutId={`underline${tabID}`} />
      )}
    </StyledTabContainer>
  );
};

Tab.Root = TabRoot;

export default Tab;
