import { cloneDeep } from 'lodash';
import { TYPE_REDUCER } from '../action';
import { typeZone } from '../../../../../typing/ZoneType';

export type selectedLayer = {
  typeArea: typeZone;
  type: string;
  nameThreekit: string;
  file?: any;
};
type roster = [
  {
    id: number;
    show: boolean;
    name: string;
    number: string;
  },
];

export type stateT = {
  curentLayer: selectedLayer;
  selectedLayers: selectedLayer[];
  rosterText: roster[];
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
  rosterText: [],
  modalInfo: {
    visibleDefaultGrafic: false,
    visibleSaveConfig: false,
    visibleTranfer: false,
  },
  loaders: {
    loadChangeThreekit: false,
    loadGrapic: false,
    loadCustomImg: false,
    loadChangetProduct: false,
    loadShowReviewPage: false,
  },
};

const Settings = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_REDUCER.CLEAR_AREA_OBJECR: {
      const { type, listPointAria } = action.payload;
      const selectedLayers = state['selectedLayers'].filter((layer) => {
        const isType = layer['typeArea'] === type;
        const isArea = listPointAria.includes(layer['nameThreekit']);

        return !(isType && isArea);
      });
      return {
        ...state,
        selectedLayers: selectedLayers,
        // ...store,
      };
      break;
    }
    case TYPE_REDUCER.RESTORE_CONFIG: {
      const store = action.payload;

      return {
        ...state,
        ...store,
      };
      break;
    }
    case TYPE_REDUCER.SET_RUSTER: {
      const listRoster = action.payload;

      return {
        ...state,
        rosterText: listRoster,
      };
      break;
    }
    case TYPE_REDUCER.SET_LOAD_REVIEW_PAGE: {
      const changeThreekit = action.payload;

      return {
        ...state,
        loaders: {
          ...state.loaders,
          loadShowReviewPage: changeThreekit,
        },
      };
      break;
    }
    case TYPE_REDUCER.SET_LOAD_CHANGE_OBJECT: {
      const changeThreekit = action.payload;

      return {
        ...state,
        loaders: {
          ...state.loaders,
          loadChangetProduct: changeThreekit,
        },
      };
      break;
    }
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
        curentLayer: {
          ...state.curentLayer,
          type: '',
          nameThreekit: '',
        },
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
