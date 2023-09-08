import { cloneDeep } from 'lodash';
import { TYPE_REDUCER } from '../action';
import { typeZone } from '../../../../../typing/ZoneType';

export type selectedLayer = {
  typeArea: typeZone;
  type: string;
  nameThreekit: string;
  file?: any;
};

export type stateT = {
  curentLayer: selectedLayer;
  selectedLayers: selectedLayer[];
  rosterText: {
    playerName: string[];
    playerNumber: string[];
  };
  modalInfo: Record<string, boolean>;
  loaders: Record<string, boolean>;
};
const initialState: stateT = {
  curentLayer: {
    typeArea: 'text',
    type: '',
    nameThreekit: '',
  },
  selectedLayers: [],
  rosterText: {
    playerName: [],
    playerNumber: [],
  },
  modalInfo: {
    visibleDefaultGrafic: false,
    visibleSaveConfig: false,
    visibleTranfer: false,
  },
  loaders: {
    loadChangeThreekit: false,
    loadGrapic: false,
    loadCustomImg: false,
  },
};

const Settings = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_REDUCER.SET_LOAD_CUSTOM_IMG: {
      const changeThreekit = action.payload;

      return {
        ...state,
        loaders: {
          ...state.loaders,
          loadCustomImg: changeThreekit,
        },
      };
      break;
    }
    case TYPE_REDUCER.SET_TREKIT_ATTR: {
      const changeThreekit = action.payload;

      return {
        ...state,
        loaders: {
          ...state.loaders,
          loadChangeThreekit: changeThreekit,
        },
      };
      break;
    }
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
