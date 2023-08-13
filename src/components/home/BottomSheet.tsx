import React, { forwardRef, memo, useRef } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';

import { focusedPlaceAtom } from '@store/placesAtom';
import { useAtom } from 'jotai/index';

interface Props {
  children: React.ReactNode;
}

const HomeBottomSheet = forwardRef<BottomSheetRef, Props>(
  ({ children }, ref) => {
    const focusRef = useRef<HTMLButtonElement>(null);

    const [focusedPlace] = useAtom(focusedPlaceAtom);

    return (
      <BottomSheet
        open
        skipInitialTransition
        ref={ref}
        initialFocusRef={focusRef}
        blocking={false}
        defaultSnap={({ maxHeight }) => 226}
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, 248, 97]}
        expandOnContentDrag={true}
      >
        {children}
      </BottomSheet>
    );
  },
);

export default memo(HomeBottomSheet);
