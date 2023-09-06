import { options } from '../../../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { getAreasByType } from '../../../data/areasObjects';

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
