import { CurrentLocation } from '../../../models/currentLocation';

export type GetCurrentLocationResponse = CurrentLocation;
export type GetCurrentLocationRequest = {
  x: string;
  y: string;
};
