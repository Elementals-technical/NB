import s from './PersonalizationObjectGraphics.module.scss';
import { UploadFile } from '../../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
import { useLocation, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getVisibleLayers } from '../../../shared/function/providers/redax/selectore';
import { useDispatch } from 'react-redux';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useEffect, useState } from 'react';
import { setCurentLayer } from '../../../shared/function/providers/redax/action';
import { cloneDeep } from 'lodash';
import { Select } from '../../../shared/UI/Select/Select';
import { Counter } from '../../../shared/UI/Counter/Counter';
import { LinerWrap } from '../../../shared/UI/BaseComponent/GroupComponent/LinerWrap/LinerWrap';
import { InputText } from '../../../shared/UI/BaseComponent/InputText/InputText';
import {
  getValueThreekit,
  setValueThreekit,
} from '../../../shared/function/ThreekitAttributeText';
import { UploadLogo } from '../../../shared/UI/Control/UploadLogo/UploadLogo';

const defaultObjText = {
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
  const dispatch = useDispatch();
  const location = useLocation();
  let { configID } = useParams();

  const visibleLayers = useSelector(
    getVisibleLayers({ objectId: configID, typeZone: 'graphic' })
  );
  const layer = visibleLayers.find((layer) => layer['isShow']);

  const [attributes, setConfiguration]: any = useConfigurator();
  const [zoneText, setZoneText]: any = useState(undefined);

  const selectedFoneSizeText = (sizeText: any) => {
    setConfiguration({ [`Size logo ${zoneText}`]: sizeText });
  };
  const selectedVerticalLogo = (sizeText: any) => {
    setConfiguration({ [`Vertical logo ${zoneText}`]: sizeText });
  };
  const selectedHorizontalLogo = (sizeText: any) => {
    setConfiguration({ [`Horizontal logo ${zoneText}`]: sizeText });
  };

  const selectedZoneText = (value: any) => {
    const getObjectPropertiesForText = (
      config: Record<string, any>,
      keyZone: string
    ) => {
      return Object.fromEntries(
        Object.entries(config).filter(
          ([key]) =>
            (key.includes(keyZone) && key.includes('Logo')) ||
            (key.includes(keyZone) && key.includes('logo'))
        )
      );
    };

    const replaceKeywordInObject = (
      obj: Record<string, any>,
      oldKeyword: string,
      newKeyword: string
    ): Record<string, any> => {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
          key.replace(oldKeyword, newKeyword),
          value,
        ])
      );
    };

    if (zoneText) {
      const prewText = cloneDeep(
        getObjectPropertiesForText(
          window.threekit.configurator.getConfiguration(),
          zoneText
        )
      );
      const nextObjText = cloneDeep(
        replaceKeywordInObject(prewText, zoneText, value['nameThreekit'])
      );
      const prewObjText = cloneDeep(
        replaceKeywordInObject(defaultObjText, 'back 2', zoneText)
      );

      setConfiguration({ ...nextObjText });
      setConfiguration({ ...prewObjText });
      setZoneText(value['nameThreekit']);
    } else {
      setZoneText(value['nameThreekit']);
    }
  };

  // useEffect(() => {
  //   if (Object.keys(attributes).length > 0) {
  //     if (layer) {
  //       selectedZoneText(layer);
  //       dispatch(
  //         setCurentLayer({
  //           nameThreekit: layer['nameThreekit'],
  //         })
  //       );
  //     }
  //   }
  // }, []);

  const getValueThreekitFunc = getValueThreekit(zoneText, attributes);
  const setValueThreekitFunc = setValueThreekit(zoneText, setConfiguration);

  debugger;
  // if (Object.keys(attributes).length < 1) return <></>;
  // if (!zoneText) return <></>;
  // if (!layer) return <></>;
  // if (!configID) return <></>;
  return (
    <>
      <UploadLogo zoneText={zoneText} />
      {/* <div className={s.wrap}>
        <div className={s.line}>
          <div className={s.boxFont}>
            <Select
              title={'Text location'}
              options={visibleLayers}
              value={layer['value']}
              onChange={(value) => {
                const valueObj = visibleLayers.find(
                  (i) => i['value'] === value
                );
                if (valueObj) {
                  selectedZoneText(valueObj);
                  dispatch(
                    setCurentLayer({
                      nameThreekit: valueObj['nameThreekit'],
                    })
                  );
                }
              }}
            />
          </div>

          <div className={s.boxheight}>
            <LinerWrap name={'Select height'}>
              <InputText
                step={0.01}
                min={0.1}
                max={1}
                inputmode="decimal"
                type="number"
                lang="nl"
                defaultValue={getValueThreekitFunc('Size logo ')}
                onChange={(value: any) => {
                  selectedFoneSizeText(value);
                }}
              />
            </LinerWrap>
          </div>
        </div>
        <div className={s.wrap}> 
          <div className={s.box25}>
            <LinerWrap name={'Horizontal shift'}>
              <InputText
                step={0.01}
                min={-1}
                max={1}
                inputmode="decimal"
                type="number"
                lang="nl"
                defaultValue={getValueThreekitFunc('Vertical logo ')}
                onChange={(value: any) => {
                  selectedVerticalLogo(value);
                }}
              />
            </LinerWrap>
          </div>
          <div className={s.box25}> 
            <LinerWrap name={'Vertical shift'}>
              <InputText
                step={0.01}
                min={-1}
                max={1}
                inputmode="decimal"
                type="number"
                lang="nl"
                defaultValue={getValueThreekitFunc('Horizontal logo ')}
                onChange={(value: any) => {
                  selectedHorizontalLogo(value);
                }}
              />
            </LinerWrap>
          </div>
        </div>
      </div> */}
    </>
  );
};
