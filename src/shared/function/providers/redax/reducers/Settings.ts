import { cloneDeep } from 'lodash';
import { TYPE_REDUCER } from '../action';
import { typeZone } from '../../../../../typing/ZoneType';

export type selectedLayer = {
  typeArea: typeZone;
  type: string;
  nameThreekit: string;
};
export type stateT = {
  curentLayer: selectedLayer;
  selectedLayers: selectedLayer[];
};
const initialState: stateT = {
  curentLayer: {
    typeArea: 'text',
    type: '',
    nameThreekit: '',
  },
  selectedLayers: [],
};

const Settings = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_REDUCER.SET_LAYER_AREA: {
      const layer = action.payload;

      const layers = cloneDeep(state.selectedLayers);
      layers.push(layer);
      return {
        ...state,
        selectedLayers: layers,
      };
      break;
    }
    case TYPE_REDUCER.SET_CURENT_AREA: {
      const layerAreaProp = action.payload;

      return {
        ...state,

        curentLayer: {
          ...state.curentLayer,
          ...layerAreaProp,
        },
      };
      break;
    }

    // case TYPE_REDUCER.SET_STATUS_HINTS: {
    //   const { status, idHelpPorch } = action.payload;

    //   return {
    //     ...state,

    //     helpsModals: {
    //       ...state.helpsModals,
    //       [idHelpPorch]: status,
    //     },
    //   };
    // }

    default:
      return state;
  }
};

export default Settings;
