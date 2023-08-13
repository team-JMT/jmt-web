import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import { StyledBottomSheet } from '@commons/BottomSheet/StyledBottomSheet';
import { focusedPlaceAtom } from '@store/placesAtom';
import { useAtom } from 'jotai';

interface Props {
  children: React.ReactNode;
}

const HomeBottomSheet = forwardRef<BottomSheetRef, Props>(
  ({ children }, ref) => {
    const focusRef = useRef<HTMLButtonElement>(null);
    const innerRef = useRef<BottomSheetRef>(null);

    const [isFullPage, setIsFullPage] = React.useState(false);

    const [focusedPlace] = useAtom(focusedPlaceAtom);

    useImperativeHandle(ref, () => ({
      snapTo: (numberOrCallback, options) => {
        if (innerRef.current?.snapTo) {
          innerRef.current.snapTo(numberOrCallback, options);
        }
      },
      get height() {
        return innerRef.current?.height ?? 0;
      },
    }));

    return (
      <StyledBottomSheet
        open
        fullPage={isFullPage}
        skipInitialTransition={true}
        ref={innerRef}
        initialFocusRef={focusRef}
        blocking={false}
        defaultSnap={({ maxHeight }) => 226}
        onSpringStart={(event) => {
          if (!innerRef.current) {
            return;
          }
          if (event.type === 'SNAP') {
            const isMaxHeight =
              innerRef.current.height === window.innerHeight - 116;
            if (isMaxHeight) {
              setIsFullPage(true);
            } else {
              setIsFullPage(false);
            }
          }
        }}
        onSpringCancel={(event) => {
          setIsFullPage(false);
        }}
        onSpringEnd={(event) => {
          if (!innerRef.current) {
            return;
          }
          if (event.type === 'SNAP' && event.source === 'dragging') {
            const checkHeight = window.innerHeight - 116;
            setIsFullPage(innerRef.current.height >= checkHeight);
          }
        }}
        snapPoints={({ maxHeight }) => [window.innerHeight - 116, 248, 97]}
        expandOnContentDrag={true}
        scrollLocking={true}
        header={isFullPage ? <div className={'header'}></div> : undefined}
      >
        {children}
      </StyledBottomSheet>
    );
  },
);

export default memo(HomeBottomSheet);
