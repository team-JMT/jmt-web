import { atom } from 'jotai';

const BottomSheetAtom = 'BottomSheet';
export const BOTTOM_SHEET_KEY = {
  IS_OPEN: 'IS_OPEN',
} as const;

export const BottomSheetState = {
  [BOTTOM_SHEET_KEY.IS_OPEN]: false,
};

export const bottomSheetState = atom<typeof BottomSheetState>(BottomSheetState);

export const openBottomSheet = atom(
  null,
  (get, set, bottomSheetKey: keyof typeof BOTTOM_SHEET_KEY) => {
    set(bottomSheetState, {
      ...get(bottomSheetState),
      [bottomSheetKey]: true,
    });
  },
);

export const closeBottomSheet = atom(
  null,
  (get, set, bottomSheetKey: keyof typeof BOTTOM_SHEET_KEY) => {
    set(bottomSheetState, {
      ...get(bottomSheetState),
      [bottomSheetKey]: false,
    });
  },
);

export const toggleBottomSheet = atom(
  null,
  (get, set, bottomSheetKey: keyof typeof BOTTOM_SHEET_KEY) => {
    set(bottomSheetState, {
      ...get(bottomSheetState),
      [bottomSheetKey]: !get(bottomSheetState)[bottomSheetKey],
    });
  },
);
