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
    'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5NTgzMjg5N30.LBEcljx2u2fSuXoy_DCRndRjkH2ZJ9kZtMG0YfIW_YGhuX7pMmk4CvSpmy5w8bZDgfRHsEhQMjAz8wilyaVnhA',
  userPosition: {
    placeName: '',
    addressName: '',
    roadAddressName: '',
    x: '127.0596',
    y: '37.6633',
  }, //x,y값 테스트용으로 넣어놓았습니다.
});
