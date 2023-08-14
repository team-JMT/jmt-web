import { atom } from 'jotai';

export type MapAtom = {
  남서_좌표: {
    x: number;
    y: number;
  };
  북동_좌표: {
    x: number;
    y: number;
  };
};
export const mapAtom = atom<MapAtom | null>(null);
