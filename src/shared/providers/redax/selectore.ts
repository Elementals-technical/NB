import { options } from '../../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';

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
export const getVisibleLayers = ({ ...state }) => {
  const selectedTextLayers = getSelectedTextLayers(state);
  if (selectedTextLayers.lengtg < 1) {
    return options.map((option) => ({
      ...option,
      isShow: true,
    }));
  }

  return options.map((option) => {
    return {
      ...option,
      isShow: !selectedTextLayers.includes(option['nameThrekit']),
    };
  });
};
