import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { BOTTOM_SHEET_KEY, bottomSheetState } from '@store/bottomSheetAtom';
import { MODAL_KEY } from '@store/modalAtom';
import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import OutsideClickHandler from '@utils/OutsideClickHandler';

import List from './components/List';
import Wrapper from './components/Wrapper';
import { LayerWrapper } from './components/Wrapper/styled';

export type $Values<T extends object> = T[keyof T];

interface Props {
  type: $Values<typeof MODAL_KEY>;
  header?: ReactNode;
  content?: ReactNode;
  canOutsideClick?: boolean;
  onOutsideClick?: () => void;
}

const BottomSheet = ({
  type = BOTTOM_SHEET_KEY.IS_OPEN,
  header,
  content,
  canOutsideClick = true,
  onOutsideClick,
}: Props) => {
  const [bottomSheet, setBottomSheet] = useAtom(bottomSheetState);

  return createPortal(
    <AnimatePresence>
      {bottomSheet[type] && (
        <LayerWrapper
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', duration: 0.3 }}
          key={type}
          className={'some-container'}
        >
          <OutsideClickHandler
            outsideClick={() => {
              if (!canOutsideClick) {
                return;
              }
              onOutsideClick && onOutsideClick();
              setBottomSheet({
                ...bottomSheet,
                [type]: !bottomSheet[type],
              });
            }}
          >
            <BottomSheet.Wrapper>
              {header}
              {content}
            </BottomSheet.Wrapper>
          </OutsideClickHandler>
        </LayerWrapper>
      )}
    </AnimatePresence>,
    document.getElementById('modal') as Element,
  );
};

BottomSheet.List = List;
BottomSheet.Wrapper = Wrapper;

export default BottomSheet;
