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
};

const getAreaObjects = () => cloneDeep(ProductInfo);

export const getProductByKey = (key: keyArea) => {
  const areasObject = getAreaObjects();
  return areasObject[key] || undefined;
};
