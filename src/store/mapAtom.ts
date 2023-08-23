import { atom } from 'jotai';

export type MapAtom = {
  남서_좌표: {
    x: string;
    y: string;
  };
  북동_좌표: {
    x: string;
    y: string;
  };
};
export const mapAtom = atom<MapAtom>({
  남서_좌표: {
    x: '',
    y: '',
  },
  북동_좌표: {
    x: '',
    y: '',
  },
});
