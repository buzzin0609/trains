import { is } from 'ramda';

export enum TrackType {
  A,
  A2,
  E
}

export const trackNames = Object.entries(TrackType).filter((value => {
  return is(String, value[1]);
}));

export const trackWidths: { [key in TrackType]: number } = {
  [TrackType.A]: 150,
  [TrackType.A2]: 100,
  [TrackType.E]: 150
};

export const trackHeights: { [key in TrackType]: number } = {
  [TrackType.A]: 50,
  [TrackType.A2]: 50,
  [TrackType.E]: 50
};