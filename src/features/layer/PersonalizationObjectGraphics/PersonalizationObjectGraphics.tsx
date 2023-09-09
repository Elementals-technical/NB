import s from './PersonalizationObjectGraphics.module.scss';
import { useLocation, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getVisibleLayers } from '../../../shared/function/providers/redax/selectore';
import { useDispatch } from 'react-redux';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import {
  getValueThreekit,
  setValueThreekit,
} from '../../../shared/function/ThreekitAttributeText';
import { UploadLogo } from '../../../shared/UI/Control/UploadLogo/UploadLogo';
import { setCurentLayer } from '../../../shared/function/providers/redax/action';
import { SettingLogo } from '../../../wigetch/SettingLogo/SettingLogo';

export const defaultObjLogo = {
  'Add Logo back 2': {
    assetId: '',
    type: 'item',
  },
  'Upload logo back 2': {
    assetId: '',
  },
  'Color Logo back 2': {
    r: 1,
    g: 1,
    b: 1,
  },
  'Size logo back 2': 0.75,
  'Rotate logo back 2': 0,
  'Horizontal logo back 2': 0.5,
  'Vertical logo back 2': 0.5,
};

export const PersonalizationObjectGraphics = () => {
  let { configID } = useParams();
  const [attributes, setConfiguration]: any = useConfigurator();
  const [zoneLogo, setZoneLogo]: any = useState(undefined);

  const location = useLocation();

  if (!configID) return <></>;
  if (!attributes) return <></>;
  return (
    <>
      <UploadLogo zoneLogo={zoneLogo} />
      <SettingLogo
        zoneLogo={zoneLogo}
        setZoneText={setZoneLogo}
        defaultObjLogo={defaultObjLogo}
        configID={configID}
      ></SettingLogo>
    </>
  );
};
