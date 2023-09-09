import { options } from '../../../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { getAreasByType } from '../../../data/areasObjects';

export const getRosterSrore = ({ ...state }) => {
  const rosterText = getRosterText(state);
  const selectedLayers = getSelectedLayers(state);

  return {
    selectedLayers: selectedLayers,
    rosterText: rosterText,
  };
};
export const getRosterText = ({ ...state }) => {
  return state['Configuration']['rosterText'];
};
export const getLoaders = ({ ...state }) => {
  return state['Configuration']['loaders'];
};
export const getLoadersName =
  (name: string) =>
  ({ ...state }) => {
    const modalObj = getLoaders(state);
    if (!modalObj[name]) return false;
    return getLoaders(state)[name];
  };
export const getModalInfo = ({ ...state }) => {
  return state['Configuration']['modalInfo'];
};
export const getModalInfoName =
  (name: string) =>
  ({ ...state }) => {
    const modalObj = getModalInfo(state);
    if (!modalObj[name]) return false;
    return getModalInfo(state)[name];
  };

export const getNameThreekitCurentLayer = ({ ...state }) => {
  return state['Configuration']['curentLayer']['nameThreekit'];
};
export const getCurentLayer = ({ ...state }) => {
  return state['Configuration']['curentLayer'];
};
export const getSelectedLayers = ({ ...state }) => {
  return state['Configuration']['selectedLayers'];
};
export const getSelectedTextLayers = ({ ...state }) => {
  return state['Configuration']['selectedLayers'].map(
    (layer: any) => layer['nameThreekit']
  );
};
export const getSelectedIsNumberRuster = ({ ...state }) => {
  return state['Configuration']['selectedLayers']
    .map((layer: any) => layer['type'])
    .includes('player-number');
};
export const getSelectedNameRuster = ({ ...state }) => {
  return state['Configuration']['selectedLayers'].find(
    (layer: any) => layer['type'] === 'player-name'
  );
};
export const getSelectedNumberRuster = ({ ...state }) => {
  return state['Configuration']['selectedLayers'].find(
    (layer: any) => layer['type'] === 'player-number'
  );
};
export const getVisibleLayers =
  ({ objectId, typeZone }: any) =>
  ({ ...state }) => {
    const areasByType = getAreasByType(typeZone, objectId);
    const selectedTextLayers = getSelectedTextLayers(state);
    if (selectedTextLayers.lengtg < 1) {
      return areasByType.map((option) => ({
        ...option,
        isShow: true,
      }));
    }

    return areasByType.map((option) => {
      return {
        ...option,
        isShow: !selectedTextLayers.includes(option['nameThreekit']),
      };
    });
  };
