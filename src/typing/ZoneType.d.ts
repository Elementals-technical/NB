type typeZone = 'text' | 'logo';
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
  nameThreekit: string;
  type: typeZone;
  sort: number;
  position: logoPositions;
};

export type listZoneT = zone[];
