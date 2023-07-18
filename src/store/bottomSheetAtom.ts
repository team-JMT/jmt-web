import { atom } from 'jotai';

const BottomSheetAtom = 'BottomSheet';
export const BOTTOM_SHEET_KEY = {
  FOOD_CATEGORY: 'FOOD_CATEGORY',
  SORT_BY: 'SORT_BY',
  DRINK_CATEGORY: 'DRINK_CATEGORY',
  PLACE_DETAIL: 'PLACE_DETAIL',
} as const;

export const BottomSheetState = {
  [BOTTOM_SHEET_KEY.FOOD_CATEGORY]: false,
  [BOTTOM_SHEET_KEY.SORT_BY]: false,
  [BOTTOM_SHEET_KEY.DRINK_CATEGORY]: false,
  [BOTTOM_SHEET_KEY.PLACE_DETAIL]: false,
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
