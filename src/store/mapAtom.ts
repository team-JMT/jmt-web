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
export const mapLatAtom = atom<MapAtom>({
  남서_좌표: {
    x: '',
    y: '',
  },
  북동_좌표: {
    x: '',
    y: '',
  },
});

export const naverMapAtom = atom<naver.maps.Map | null>(null);
