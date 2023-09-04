import { cloneDeep } from 'lodash';
import { listZoneT, typeZone } from '../../typing/ZoneType';

type areasObjects = Record<string, listZoneT>;
export type keyArea = string;
export const areasObject: areasObjects = {
  short: [
    {
      nameThreekit: 'front 1',
      type: 'graphic',
      sort: 10,
      position: 'front 1',
    },
    {
      nameThreekit: 'front 2',
      type: 'graphic',
      sort: 20,
      position: 'front 2',
    },
  ],
  jersey: [
    {
      nameThreekit: 'front 1',
      type: 'graphic',
      sort: 10,
      position: 'front 1',
    },
    {
      nameThreekit: 'front 2',
      type: 'graphic',
      sort: 20,
      position: 'front 2',
    },
    {
      nameThreekit: 'back 1',
      type: 'graphic',
      sort: 30,
      position: 'front 1',
    },
    {
      nameThreekit: 'back 2',
      type: 'graphic',
      sort: 40,
      position: 'front 2',
    },
    {
      nameThreekit: 'side 1',
      type: 'graphic',
      sort: 50,
      position: 'front 1',
    },
    {
      nameThreekit: 'side 2',
      type: 'graphic',
      sort: 60,
      position: 'front 2',
    },
    {
      nameThreekit: 'front 1',
      type: 'text',
      sort: 70,
      position: 'front 2',
    },
  ],
};

const getAreaObjects = () => cloneDeep(areasObject);

export const getAreasByKey = (key: keyArea) => {
  const areasObject = getAreaObjects();
  return areasObject[key] || [];
};
export const getAreasByType = (type: typeZone, key: keyArea) => {
  const areas = getAreasByKey(key);
  return areas.filter((area) => area.type === type);
};
export const getZoneTypesByKey = (key: string): string[] => {
  const areas = getAreasByKey(key);
  const uniqueTypes = new Set(areas.map((area: any) => area.type));
  return Array.from(uniqueTypes);
};

export const filterAvailableZones = (
  key: string,
  listPersonalization: any[]
): any[] => {
  const availableTypes = getZoneTypesByKey(key);
  return listPersonalization.filter((item) =>
    availableTypes.includes(item.value)
  );
};
