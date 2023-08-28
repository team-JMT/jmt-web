// import { $Values } from '@components/common/BottomSheet';
import { atom } from 'jotai';

export const FoodKey = {
  KOREA: '한식',
  JAPAN: '일식',
  CHINA: '중식',
  FOREIGN: '양식',
  FUSION: '퓨전',
  CAFE: '카페',
  BAR: '주점',
  ETC: '기타',
} as const;

// eslint-disable-next-line @typescript-eslint/naming-convention
export type foodCheck = keyof typeof FoodKey | '';

export const foodCategoryState = atom<foodCheck>('');

// export const FoodCategoryState = {
//   KOREAN: false,
//   JAPANESE: false,
//   CHINESE: false,
//   WESTERN: false,
//   FUSION: false,
//   CAFE: false,
//   BAR: false,
//   OTHERS: false,
// };

export const LiquorKey = {
  POSSIBLE: '주류 가능',
  IMPOSSIBLE: '주류 불가능/모름',
} as const;

// eslint-disable-next-line @typescript-eslint/naming-convention
export type drinkCheck = keyof typeof LiquorKey | '';

export const drinkCategoryState = atom<drinkCheck>('');
