import { useConfigurator } from '@threekit-tools/treble/dist';
import { LinerWrap } from '../../shared/UI/BaseComponent/GroupComponent/LinerWrap/LinerWrap';
import { InputText } from '../../shared/UI/BaseComponent/InputText/InputText';
import { Select } from '../../shared/UI/Select/Select';
import s from './SettingLogo.module.scss';
import {
  getValueThreekit,
  setValueThreekit,
} from '../../shared/function/ThreekitAttributeText';
import { cloneDeep } from 'lodash';
import { useSelector } from 'react-redux';
import { getVisibleLayers } from '../../shared/function/providers/redax/selectore';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCurentLayer } from '../../shared/function/providers/redax/action';
import { IconStart } from '../../shared/assets/svg/IconІStart';

interface Props {
  zoneLogo: any;
  setZoneText: any;
  defaultObjLogo: any;
  configID: string;
}

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

function replaceKeysForLoadFile(obj: any, oldKey: string, newKey: string) {
  const newObj: any = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key.includes(oldKey)) {
      newObj[key.replace(oldKey, newKey)] = value;
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

export const SettingLogo = ({
  zoneLogo,
  setZoneText,
  defaultObjLogo,
  configID,
}: Props) => {
  const [attributes, setConfiguration]: any = useConfigurator();

  const [valueSelect, setValueSelec] = useState('');

  const dispatch = useDispatch();

  const visibleLayers = useSelector(
    getVisibleLayers({ objectId: configID, typeZone: 'graphic' })
  );
  const layer = visibleLayers.find((layer) => layer['isShow']);

  useEffect(() => {
    if (Object.keys(attributes).length > 0) {
      if (layer) {
        setValueSelec(layer['value']);
        selectedZoneText(layer);
        dispatch(
          setCurentLayer({
            nameThreekit: layer['nameThreekit'],
          })
        );
      }
    }
  }, []);

  const selectedFoneSizeText = (sizeText: any) => {
    setConfiguration({ [`Size logo ${zoneLogo}`]: sizeText });
  };
  const selectedVerticalLogo = (sizeText: any) => {
    setConfiguration({ [`Vertical logo ${zoneLogo}`]: sizeText });
  };
  const selectedHorizontalLogo = (sizeText: any) => {
    setConfiguration({ [`Horizontal logo ${zoneLogo}`]: sizeText });
  };
  const getValueThreekitFunc = getValueThreekit(zoneLogo, attributes);
  const setValueThreekitFunc = setValueThreekit(zoneLogo, setConfiguration);

  const selectedZoneText = (value: any) => {
    if (zoneLogo === value['nameThreekit']) return;
    if (zoneLogo) {
      //@ts-ignore
      const loadFile = window['loadFile'];
      if (loadFile && Object.keys(loadFile).length > 0) {
        const newObjLoadFile = replaceKeysForLoadFile(
          loadFile,
          zoneLogo,
          value['nameThreekit']
        );
        //@ts-ignore
        window['loadFile'] = newObjLoadFile;
      }

      console.log('zoneLogo', zoneLogo, '=>', value['nameThreekit'], value);
      const dataLogoPrewPosition = cloneDeep(
        getObjectPropertiesForText(
          window.threekit.configurator.getConfiguration(),
          zoneLogo
        )
      );
      const dataLogoNewPosition = cloneDeep(
        replaceKeywordInObject(
          dataLogoPrewPosition,
          zoneLogo,
          value['nameThreekit']
        )
      );
      const cleareDataLogoPrewPosition = cloneDeep(
        replaceKeywordInObject(defaultObjLogo, 'back 2', zoneLogo)
      );

      setConfiguration({ ...dataLogoNewPosition });
      setConfiguration({ ...cleareDataLogoPrewPosition });
      setZoneText(value['nameThreekit']);
    } else {
      setZoneText(value['nameThreekit']);
    }
  };
  if (!zoneLogo) return <></>;
  if (!layer) return <></>;

  return (
    <div className={s.wrap}>
      <div className={s.box}>
        <div className={s.line}>
          <div className={s.boxFont}>
            <Select
              title={'Graphic Location'}
              options={visibleLayers}
              value={valueSelect}
              onChange={(value) => {
                const valueObj = visibleLayers.find(
                  (i) => i['value'] === value
                );
                if (valueObj) {
                  setValueSelec(valueObj['value']);
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
                step={0.1}
                min={0.1}
                max={1}
                inputMode="decimal"
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

        <div className={s.hintGroup}>
          <div className={s.icon}>
            <IconStart />
          </div>
          <div className={s.text}>
            You can enter the value of the size from 0.1 to 1, with a step of
            0.1
          </div>
        </div>
      </div>
      <div className={`${s.wrap} ${s.wrap3frame}`}>
        <LinerWrap name={'Horizontal shift'}>
          <InputText
            step={0.01}
            min={-1}
            max={1}
            inputMode="decimal"
            type="number"
            lang="nl"
            defaultValue={getValueThreekitFunc('Horizontal logo ')}
            onChange={(value: any) => {
              selectedHorizontalLogo(value);
            }}
          />
        </LinerWrap>

        <LinerWrap name={'Vertical shift'}>
          <InputText
            step={0.01}
            min={-1}
            max={1}
            inputMode="decimal"
            type="number"
            lang="nl"
            defaultValue={getValueThreekitFunc('Vertical logo ')}
            onChange={(value: any) => {
              selectedVerticalLogo(value);
            }}
          />
        </LinerWrap>
      </div>
    </div>
  );
};
