import { selectedLayer } from './reducers/Settings';

export const TYPE_REDUCER = {
  SET_LAYER_AREA: 'setLayerArea',
  SET_CURENT_AREA: 'setCurentArea',
  SET_TREKIT_ATTR: 'setThreekitAttribute',
  SET_LOAD_CUSTOM_IMG: 'seLoadCustomImg',
  SET_LOAD_CHANGE_OBJECT: 'seLoadChangeObkect',
  SET_LOAD_REVIEW_PAGE: 'setloadShowReviewPage',
  SET_RUSTER: 'saveRoster',
  RESTORE_CONFIG: 'restoreConfig',
  CLEAR_AREA_OBJECR: 'create_area_object',
  RESET_AREA: 'reset_area',
};

export const resetArea = () => ({
  type: TYPE_REDUCER.RESET_AREA,
  payload: {},
});
export const createAreaObject = (data: any) => ({
  type: TYPE_REDUCER.CLEAR_AREA_OBJECR,
  payload: data,
});
export const restoreConfig = (data: any) => ({
  type: TYPE_REDUCER.RESTORE_CONFIG,
  payload: data,
});
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
export const seLoadCustomImg = (data: boolean) => ({
  type: TYPE_REDUCER.SET_LOAD_CUSTOM_IMG,
  payload: data,
});
export const setloadShowReviewPage = (data: boolean) => ({
  type: TYPE_REDUCER.SET_LOAD_REVIEW_PAGE,
  payload: data,
});
export const seLoadChangeObkect = (data: boolean) => ({
  type: TYPE_REDUCER.SET_LOAD_CHANGE_OBJECT,
  payload: data,
});
export const saveRoster = (data: any) => ({
  type: TYPE_REDUCER.SET_RUSTER,
  payload: data,
});
