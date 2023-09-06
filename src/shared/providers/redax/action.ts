import { selectedLayer } from './reducers/Settings';

export const TYPE_REDUCER = {
  SET_LAYER_AREA: 'setLayerArea',
  SET_CURENT_AREA: 'setCurentArea',
};

export const setLayerArea = (data: selectedLayer) => ({
  type: TYPE_REDUCER.SET_LAYER_AREA,
  payload: data,
});
export const setCurentLayer = (data: { [key: string]: string }) => ({
  type: TYPE_REDUCER.SET_CURENT_AREA,
  payload: data,
});
