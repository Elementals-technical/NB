export type stateT = {
  //   view: {
  //     sidesBarn: viewT[];
  //     typeConfiguration: any[];
  //     activeCameraView: string;
  //     activeTypeViewer: string;
  //     editTools: listTools2d;
  //   };
  //   barns: {
  //     objBarn: objBarnT;
  //     activeBarn: string;
  //   };
  //   sections: {
  //     listSection: itemMenu[];
  //     activeSection: string;
  //   };
  //   paramsConfiguration: {
  //     allSetting: any;
  //     allObjectSetting: any;
  //     settingUI: settingConfigT[];
  //     activeSettingUI: listActiveSettingT[];
  //     settingForSides: IComponent[];
  //     errorMessageField: responseMessageT[];
  //     sideObjectsPosition: sidesGroupT;
  //   };
  //   interface: {
  //     isVisibleFirstScreenInfo: boolean;
  //     isLoadStateData: boolean;
  //     isLoad: boolean;
  //     openSectionColor: string[];
  //     openSectionIdInSides: string[];
  //     openSectionForSides: string[];
  //     isLoadThreeKit: boolean;
  //     isVisibleTutorial: boolean;
  //   };
  //   modalInfo: {
  //     visiblePrice: boolean;
  //     visibleSaveConfig: boolean;
  //     notificationModal: responseMessageT[] | null;
  //   };
  //   initializationThreekitData: initializationThreeKitDataT;
  //   logicConfig: {
  //     uuid: string;
  //     isSaveConfig: boolean;
  //   };
  //   loaders: {
  //     loaderProps: {
  //       status: boolean;
  //       idProps: string;
  //     };
  //     loaderConfig: boolean;
  //     loaderTempSide: {
  //       status: boolean;
  //       idProps: string;
  //     };
  //   };
  //   helpsModals: {
  //     helpPorch: boolean;
  //   };
};
const initialState: stateT = {
  //   view: {
  //     sidesBarn: views,
  //     typeConfiguration: ["2D", "3D"],
  //     activeCameraView: "Default",
  //     activeTypeViewer: "3D",
  //     editTools: "moveLoft",
  //   },
  //   barns: {
  //     objBarn: objBarn,
  //     activeBarn: "",
  //   },
  //   sections: {
  //     listSection: listGlobalMenu,
  //     activeSection: "CustomerInfo",
  //     // activeSection: 'Product',
  //     // activeSection: 'Sides',
  //     // activeSection: 'Colors',
  //   },
  //   paramsConfiguration: {
  //     allSetting: null,
  //     allObjectSetting: {},
  //     settingUI: settingUI,
  //     activeSettingUI: [],
  //     settingForSides: settingForSides,
  //     errorMessageField: [],
  //     sideObjectsPosition: sidesObject,
  //   },
  //   interface: {
  //     isVisibleFirstScreenInfo: false,
  //     isLoadStateData: false,
  //     isLoad: false,
  //     isLoadThreeKit: false,
  //     openSectionColor: [],
  //     openSectionIdInSides: [],
  //     openSectionForSides: [],
  //     isVisibleTutorial: false,
  //   },
  //   modalInfo: {
  //     visiblePrice: false,
  //     visibleSaveConfig: false,
  //     notificationModal: null,
  //   },
  //   initializationThreekitData: {
  //     threekitUrl: "https://admin-fts.threekit.com/",
  //     authToken: "",
  //     assetId: "",
  //     apiUrl: "",
  //     apiToken: "",
  //     orgId: "",
  //     eighthWallApiKey: "",
  //   },
  //   logicConfig: {
  //     uuid: "",
  //     isSaveConfig: false,
  //   },
  //   loaders: {
  //     loaderProps: {
  //       status: false,
  //       idProps: "",
  //     },
  //     loaderConfig: false,
  //     loaderTempSide: {
  //       status: false,
  //       idProps: "",
  //     },
  //   },
  //   helpsModals: {
  //     helpPorch: false,
  //   },
};

const Settings = (state = initialState, action: any) => {
  switch (action.type) {
    // case TYPE_REDUCER.SET_INITIALIZATION_THREEKIT: {
    //   const { initializationThreekit, modelId }: any = action.payload;

    //   return {
    //     ...state,
    //     barns: {
    //       ...state.barns,
    //       activeBarn: modelId,
    //     },
    //     initializationThreekitData: initializationThreekit,
    //   };
    // }

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
