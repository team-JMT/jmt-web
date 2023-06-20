import React, { ReactNode } from 'react';

import { MODAL_KEY, modalState, closeModal } from '@store/modalAtom';
import { AnimatePresence } from 'framer-motion';
import { useAtom, useSetAtom } from 'jotai';

import OutsideClickHandler from '@utils/OutsideClickHandler';

import { CenterInner, LayerWrapper } from './styled';

export type $Values<T extends object> = T[keyof T];

interface Props {
  type: $Values<typeof MODAL_KEY>;
  header?: ReactNode;
  content?: ReactNode;
  canOutsideClick?: boolean;
  onOutsideClick?: () => void;
}

const Modal = ({
  type = MODAL_KEY.IS_OPEN,
  header,
  content,
  canOutsideClick = true,
  onOutsideClick,
}: Props) => {
  const [Modal, setModal] = useAtom(modalState);
  const toggleM = useSetAtom(closeModal);
  return (
    <AnimatePresence>
      {Modal[type] && (
        <LayerWrapper
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          key={type}
          layoutId={type}
        >
          <OutsideClickHandler
            outsideClick={() => {
              if (!canOutsideClick) {
                return;
              }
              onOutsideClick && onOutsideClick();
              toggleM(MODAL_KEY.IS_OPEN);
            }}
          >
            <CenterInner>{content}</CenterInner>
          </OutsideClickHandler>
        </LayerWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
