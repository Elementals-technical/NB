import { cloneDeep } from 'lodash';
import { keyArea } from './areasObjects';

type infoProduct = {
  [key: string]: {
    name: string;
    category: string;
  };
};

export const ProductInfo: infoProduct = {
  Shorts: {
    name: 'Short',
    category: 'Custom Uniform',
  },
  Jersey: { name: 'Jersey', category: 'Custom Uniform' },
  Hoodie: {
    name: 'W hoodie',
    category: 'Embellished Products',
  },
  Pants: { name: 'W pant', category: 'Embellished' },
};

const getAreaObjects = () => cloneDeep(ProductInfo);

export const getProductByKey = (key: keyArea) => {
  const areasObject = getAreaObjects();
  return areasObject[key] || undefined;
};
