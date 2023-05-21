import React, { useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

interface Props {
  children: React.ReactNode;
}

const HomeBottomSheet = ({ children }: Props) => {
  const focusRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<BottomSheetRef>(null);
  return (
    <BottomSheet
      open
      skipInitialTransition
      ref={sheetRef}
      initialFocusRef={focusRef}
      blocking={false}
      defaultSnap={({ maxHeight }) => 226}
      snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, 226]}
      expandOnContentDrag={true}
    >
      {children}
    </BottomSheet>
  );
};

export default HomeBottomSheet;
