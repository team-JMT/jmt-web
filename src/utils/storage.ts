import { LocationSearchData } from '../models/locationSearchData';

function makeStorage<T extends Record<string, any>>(initialValue: T) {
  let data = initialValue;

  return {
    setData: (nextData: T): void => {
      const nextDataKeys = Object.keys(nextData);
      for (const key of nextDataKeys) {
        localStorage.setItem(key, nextData[key]);
      }
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
  accessToken: '',
  userPosition: {
    placeName: '',
    addressName: '',
    roadAddressName: '',
    x: '',
    y: '',
  },
});
