import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
export type SearchLog = {
  name: string;
  id: string;
};

export const searchLogAtom = atomWithStorage<SearchLog[]>('search-log', []);

export const addSearchLogAtom = atom(null, (get, set, arg: SearchLog) => {
  const searchLog = get(searchLogAtom);
  const filterSearchLog = searchLog.filter((log) => log.id !== arg.id);
  if (filterSearchLog.length >= 10) {
    filterSearchLog.pop();
  }
  const newSearchLog = [arg, ...filterSearchLog];
  set(searchLogAtom, newSearchLog);
});
export const removeSearchLogAtom = atom(null, (get, set, arg: SearchLog) => {
  const searchLog = get(searchLogAtom);
  const filterSearchLog = searchLog.filter((log) => log.id !== arg.id);
  set(searchLogAtom, filterSearchLog);
});
