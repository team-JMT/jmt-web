import React, { ReactNode } from 'react';

import { modalState, MODAL_KEY } from '@store/modal';
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

const Modal = ({
  type = MODAL_KEY.HOME_PLACE_FILTER,
  header,
  content,
  canOutsideClick = true,
  onOutsideClick,
}: Props) => {
  const [modal, setModal] = useAtom(modalState);

  return (
    <AnimatePresence>
      {modal[type] && (
        <LayerWrapper
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', duration: 0.3 }}
          key={type}
          layoutId={type}
        >
          <OutsideClickHandler
            outsideClick={() => {
              if (!canOutsideClick) {
                return;
              }
              onOutsideClick && onOutsideClick();
              setModal({ ...modal, [type]: !modal[type] });
            }}
          >
            <Modal.Wrapper>
              {header}
              {content}
            </Modal.Wrapper>
          </OutsideClickHandler>
        </LayerWrapper>
      )}
    </AnimatePresence>
  );
};

Modal.List = List;
Modal.Wrapper = Wrapper;

export default Modal;
