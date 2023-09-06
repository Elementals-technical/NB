import { cloneDeep } from 'lodash';
import { keyArea } from './areasObjects';

type infoProduct = {
  [key: string]: {
    name: string;
    category: string;
  };
};

export const ProductInfo: infoProduct = {
  short: {
    name: 'Short',
    category: 'Custom Uniform',
  },
  jersey: { name: 'Jersey', category: 'Custom Uniform' },
  w_hoodie: {
    name: 'W hoodie',
    category: 'Embellished Products',
  },
  w_pant: { name: 'W pant', category: 'Embellished' },
};

const getAreaObjects = () => cloneDeep(ProductInfo);

export const getProductByKey = (key: keyArea) => {
  const areasObject = getAreaObjects();
  return areasObject[key] || undefined;
};
