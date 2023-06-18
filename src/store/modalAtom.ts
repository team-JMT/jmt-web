import { atom } from 'jotai';

const ModalAtom = 'Modal';
export const MODAL_KEY = {
  IS_OPEN: 'IS_OPEN',
} as const;

export const ModalState = {
  [MODAL_KEY.IS_OPEN]: false,
};

export const modalState = atom<typeof ModalState>(ModalState);

export const openModal = atom(
  null,
  (get, set, modalKey: keyof typeof MODAL_KEY) => {
    set(modalState, {
      ...get(modalState),
      [modalKey]: true,
    });
  },
);

export const closeModal = atom(
  null,
  (get, set, modalKey: keyof typeof MODAL_KEY) => {
    set(modalState, {
      ...get(modalState),
      [modalKey]: false,
    });
  },
);

export const toggleModal = atom(
  null,
  (get, set, modalKey: keyof typeof MODAL_KEY) => {
    set(modalState, {
      ...get(modalState),
      [modalKey]: !get(modalState)[modalKey],
    });
  },
);
