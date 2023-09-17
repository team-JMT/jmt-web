import { LocationSearchData } from '../models/locationSearchData';

function makeStorage<T extends Record<string, any>>(initialValue: T) {
  let data = initialValue;

  return {
    setData: (nextData: T): void => {
      data = nextData;
    },
    getData: (): T => data,
  };
}

type NativeInfo = {
  accessToken: string;
  userPosition: LocationSearchData;
};

export const nativeInfo = makeStorage<NativeInfo>({
  accessToken:
    'eyJhbGciOiJIUzUxMiJ9.eyJhdXRoIjoiTUVNQkVSIiwiZW1haWwiOiJ0ZXN0QG5hdmVyLmNvbSIsImV4cCI6MTY5NDk1MDc4NH0.U17JfHFsr_6IruGm0dQiFKIyylnQraMOcqIb23xe2hfu7rCFsjK9e7qcaYcitijk9DMgaihRaLTdxy_xPzQIng',
  userPosition: {
    placeName: '',
    addressName: '',
    roadAddressName: '',
    x: '',
    y: '',
  },
});
