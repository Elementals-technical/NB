import { cloneDeep } from 'lodash';
import { listZoneT, typeZone } from '../../typing/ZoneType';

type areasObjects = Record<string, listZoneT>;
export type keyArea = string;
export const areasObject: areasObjects = {
  Shorts: [
    {
      label: 'Upper Front Right',
      value: 'Upper Front Right',
      nameThreekit: 'front 1',
      type: 'graphic',
    },
    {
      label: 'Upper Front Left',
      value: 'Upper Front Left',
      nameThreekit: 'front 2',
      type: 'graphic',
    },
  ],
  Pants: [
    {
      label: 'Upper Front Left',
      value: 'Upper Front Left',
      nameThreekit: 'front 2',
      type: 'graphic',
    },
  ],
  Hoodie: [
    {
      label: 'Upper Front Left',
      value: 'Upper Front Left',
      nameThreekit: 'front 2',
      type: 'graphic',
    },
    {
      label: 'Upper Back',
      value: 'Upper Back',
      nameThreekit: 'back 1',
      type: 'graphic',
    },
  ],
  Jersey: [
    {
      label: 'Upper Front',
      value: 'Upper Front',
      nameThreekit: 'front 1',
      type: 'graphic',
    },
    {
      label: 'Upper Front Left',
      value: 'Upper Front Left',
      nameThreekit: 'front 2',
      type: 'graphic',
    },
    {
      label: 'Upper Back',
      value: 'Upper Back',
      nameThreekit: 'back 1',
      type: 'graphic',
    },
    {
      label: 'Upper Back 2',
      value: 'Upper Back 2',
      nameThreekit: 'back 2',
      type: 'graphic',
    },
    {
      label: 'Side right',
      value: 'Side right',
      nameThreekit: 'side 1',
      type: 'graphic',
    },
    {
      label: 'Side left',
      value: 'Side left',
      nameThreekit: 'side 2',
      type: 'graphic',
    },
    {
      label: 'Upper Front',
      value: 'Upper Front',
      nameThreekit: 'front 1',
      type: 'text',
    },
    {
      label: 'Upper Back',
      value: 'Upper Back',
      nameThreekit: 'back 1',
      type: 'text',
    },
    {
      label: 'Lower back',
      value: 'Lower back',
      nameThreekit: 'back 2',
      type: 'text',
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
