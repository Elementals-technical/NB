type areaZone = 'front' | 'back';
type typeZone = 'text' | 'logo';
type zone = {
  nameThreekit: string;
  type: typeZone;
  sort: number;
  position: areaZone;
};

type listZone = zone[];
