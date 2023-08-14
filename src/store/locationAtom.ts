import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type SearchLog = {
  name: string;
};

export type LocationAtom = {
  currentLocation: string;
  locationLog: SearchLog[];
};

export const locationAtom = atomWithStorage<LocationAtom>('location-log', {
  currentLocation: '',
  locationLog: [],
});

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
