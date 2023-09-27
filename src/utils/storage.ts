import { LocationSearchData } from '../models/locationSearchData';

function makeStorage<T extends Record<string, any>>(initialValue: T) {
  let data = initialValue;

  return {
    setData: (nextData: T): void => {
      data = nextData;
    },
    getData: (): T => {
      console.log('getData', data);
      return data;
    },
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
