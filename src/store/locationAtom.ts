import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type SearchLog = {
  name: string;
};

export type LocationAtom = {
  selectedLocation: {
    placeName: string;
    addressName: string;
    x: string;
    y: string;
  };
  currentLocation: {
    placeName: string;
    addressName: string;
    x: string;
    y: string;
  };
  locationLog: SearchLog[];
};

export const locationAtom = atomWithStorage<LocationAtom>('location-log', {
  selectedLocation: {
    placeName: '',
    addressName: '',
    x: '',
    y: '',
  },
  currentLocation: {
    placeName: '',
    addressName: '',
    x: '',
    y: '',
  },
  locationLog: [],
});

export const setCurrentLocationAtom = atom(
  null,
  (get, set, arg: LocationAtom['currentLocation']) => {
    const location = get(locationAtom);
    set(locationAtom, {
      ...location,
      currentLocation: arg,
    });
  },
);

export const getCurrentLocationAtom = atom(
  (get) => get(locationAtom).currentLocation,
);

export const getSelectedLocationAtom = atom(
  (get) => get(locationAtom).selectedLocation,
);

export const setSelectedLocationAtom = atom(
  null,
  (get, set, arg: LocationAtom['selectedLocation']) => {
    const location = get(locationAtom);
    set(locationAtom, {
      ...location,
      selectedLocation: arg,
    });
  },
);

export const addLocationSearchLogAtom = atom(
  null,
  (get, set, arg: SearchLog) => {
    const searchLog = get(locationAtom);
    const filterSearchLog = searchLog.locationLog.filter(
      (log) => log.name !== arg.name,
    );
    if (filterSearchLog.length >= 10) {
      filterSearchLog.pop();
    }
    const newSearchLog = [arg, ...filterSearchLog];
    set(locationAtom, {
      ...searchLog,
      locationLog: newSearchLog,
    });
  },
);
export const removeLocationSearchLogAtom = atom(
  null,
  (get, set, arg: SearchLog) => {
    const searchLog = get(locationAtom);
    const filterSearchLog = searchLog.locationLog.filter(
      (log) => log.name !== arg.name,
    );
    set(locationAtom, {
      ...searchLog,
      locationLog: filterSearchLog,
    });
  },
);
