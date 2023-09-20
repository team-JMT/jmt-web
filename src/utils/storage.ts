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
    'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5NTIxMTkxOX0.vhyY7wQOfRsFQ3Ym-oQf2g8UjXj6jgd0oE7M4M_1FVa4ba1IcUUYLqQDqTK3xWlhoYXL1J_gsH74OafGL4lpKg',
  userPosition: {
    placeName: '',
    addressName: '',
    roadAddressName: '',
    x: '',
    y: '',
  },
});
