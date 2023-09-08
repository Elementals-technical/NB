import { selectedLayer } from './reducers/Settings';

export const TYPE_REDUCER = {
  SET_LAYER_AREA: 'setLayerArea',
  SET_CURENT_AREA: 'setCurentArea',
  SET_TREKIT_ATTR: 'setThreekitAttribute',
};

export const setLayerArea = (data: selectedLayer) => ({
  type: TYPE_REDUCER.SET_LAYER_AREA,
  payload: data,
});
export const setCurentLayer = (data: { [key: string]: string }) => ({
  type: TYPE_REDUCER.SET_CURENT_AREA,
  payload: data,
});
export const setThreekitAttribute = (data: boolean) => ({
  type: TYPE_REDUCER.SET_TREKIT_ATTR,
  payload: data,
});
