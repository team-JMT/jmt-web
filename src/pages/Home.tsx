import React, { useRef, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import { AppScreen } from '@stackflow/plugin-basic-ui';

import '../styles/bottomSheet.css';
import NaverMap from '../components/common/NaverMap';
import SearchInput from '../components/common/SearchInput';
import { useHomeFlow } from '../stacks/homeStackFlow';

const Home = () => {
  const [expandOnContentDrag, setExpandOnContentDrag] = useState(true);
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);
  const { push } = useHomeFlow();

  return (
    <AppScreen>
      <NaverMap />
      <BottomSheet
        open
        skipInitialTransition
        ref={sheetRef}
        initialFocusRef={focusRef}
        blocking={false}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
        expandOnContentDrag={expandOnContentDrag}
      >
        <div className={'container-inner'}>
          <SearchInput />
          <div onClick={() => push('Search', {})}>asd</div>
        </div>
      </BottomSheet>
    </AppScreen>
  );
};

export default Home;
