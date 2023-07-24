//https://github.com/stipsan/react-spring-bottom-sheet/blob/main/pages/fixtures/sticky.tsx
import React, { useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

import {
  BOTTOM_SHEET_KEY,
  bottomSheetState,
  closeBottomSheet,
} from '@store/bottomSheetAtom';
import { AnimatePresence } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';

import FooterButton from './components/FooterButton';

export type $Values<T extends object> = T[keyof T];
interface Props {
  type: $Values<typeof BOTTOM_SHEET_KEY>;
  children: React.ReactNode;
}

const FilterBottomSheet = ({ type, children }: Props) => {
  const sheetRef = useRef<BottomSheetRef>(null);
  const [bottomSheet, setBottomSheet] = useAtom(bottomSheetState);
  const handleCloseBottomSheet = useSetAtom(closeBottomSheet);

  const onDismiss = () => {
    handleCloseBottomSheet(type);
  };
  return (
    <AnimatePresence>
      <BottomSheet
        open={bottomSheet[type]}
        ref={sheetRef}
        defaultSnap={({ maxHeight }) => 234}
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 10, 248]}
        expandOnContentDrag={true}
        onDismiss={onDismiss}
        footer={<FooterButton />}
      >
        <div className={'container-inner'}>{children}</div>
        <button onClick={onDismiss}>닫혀라</button>
      </BottomSheet>
    </AnimatePresence>
  );
};

export default FilterBottomSheet;
