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
export type FoodCheck = keyof typeof FoodKey | '';
export const foodCategoryState = atom<FoodCheck>('');

export const LiquorKey = {
  POSSIBLE: '주류 가능',
  IMPOSSIBLE: '주류 불가능/모름',
} as const;
export type DrinkCheck = keyof typeof LiquorKey | '';
export const drinkCategoryState = atom<DrinkCheck>('');

export const drinkToBoolean = (drink: DrinkCheck) => {
  if (drink === 'POSSIBLE') {
    return true;
  } else if (drink === 'IMPOSSIBLE') {
    return false;
  } else {
    return undefined;
  }
};

export const SortKey = {
  NEAR: '가까운 순',
  LIEK: '좋아요 순',
  RECENT: '최신 순',
} as const;
export type SortCheck = keyof typeof SortKey;
export const sortByState = atom<SortCheck>('NEAR');
