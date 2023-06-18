import { atom } from 'jotai';

const ModalAtom = 'Modal';
export const MODAL_KEY = {
  HOME_PLACE_FILTER: 'HOME_PLACE_FILTER',
  POSITION: 'POSITION',
  CITY: 'CITY',
  COUNTRY: 'COUNTRY',
} as const;

export const ModalState = {
  [MODAL_KEY.POSITION]: false,
  [MODAL_KEY.HOME_PLACE_FILTER]: false,
  [MODAL_KEY.CITY]: false,
  [MODAL_KEY.COUNTRY]: false,
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
