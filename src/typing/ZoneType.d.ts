type typeZone = 'text' | 'graphic';
type logoPositions = string;

// const logoPositions: logoPositions[] = [
//   'front 1',
//   'front 2',
//   'back 1',
//   'back 2',
//   'side 1',
//   'side 2',
// ];

type zone = {
  label: string;
  value: string;
  nameThreekit: string;
  type: typeZone;
};

export type listZoneT = zone[];
