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
    'eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwiYXV0aCI6Ik1FTUJFUiIsImV4cCI6MTY5NTgzOTIyOX0.anFYmt1OgWn9K9cJ4zUdStVCuQgMQf6N8NlfacNKTvOwqrIUo_FCmLa1lq5nDa3yNwZUd19yh7PI-VyLx8rL4Q',
  userPosition: {
    placeName: '',
    addressName: '',
    roadAddressName: '',
    x: '',
    y: '',
  },
});
