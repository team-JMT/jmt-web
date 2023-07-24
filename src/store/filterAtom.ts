import { $Values } from '@components/common/BottomSheet';
import { atom } from 'jotai';

export const FOOD_CATEGORY_KEY = {
  KOREA: 'KOREA',
  JAPAN: 'JAPAN',
  CHINA: 'CHINA',
  WESTERN: 'WESTERN',
  CAFE: 'CAFE',
  BAR: 'BAR',
  OTHERS: 'OTHERS',
} as const;

type FoodCategory = $Values<typeof FOOD_CATEGORY_KEY>;

export const FoodCategoryState = {
  [FOOD_CATEGORY_KEY.KOREA]: false,
  [FOOD_CATEGORY_KEY.JAPAN]: false,
  [FOOD_CATEGORY_KEY.CHINA]: false,
  [FOOD_CATEGORY_KEY.WESTERN]: false,
  [FOOD_CATEGORY_KEY.CAFE]: false,
  [FOOD_CATEGORY_KEY.BAR]: false,
  [FOOD_CATEGORY_KEY.OTHERS]: false,
};

export const foodCategoryStateState = atom<FoodCategory[]>([]);
