import { atom } from 'jotai';

import { Restaurant } from '../models/getRestaurantData';

export const placesAtom = atom<Restaurant[]>([]);

export const focusedPlaceAtom = atom<Restaurant | null>(null);

export const setPlacesAtom = atom(null, (get, set, update: Restaurant[]) => {
  set(placesAtom, update);
});
