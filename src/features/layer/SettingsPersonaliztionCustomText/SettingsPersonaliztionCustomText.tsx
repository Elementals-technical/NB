import React, { useEffect, useId, useState } from 'react';
import s from './SettingsPersonaliztionCustomText.module.scss';

import { ListColor } from '../../../shared/UI/ListColor/ListColor';
import { listColor } from '../../../shared/data/structureUI';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { cloneDeep } from 'lodash';
import { Select } from '../../../shared/UI/Select/Select';
import { setCurentLayer } from '../../../shared/providers/redax/action';
import { useDispatch } from 'react-redux';
import { Counter } from '../../../shared/UI/Counter/Counter';
import { InputText } from '../../../shared/UI/BaseComponent/InputText/InputText';
import { LinerWrap } from '../../../shared/UI/BaseComponent/GroupComponent/LinerWrap/LinerWrap';
import { TextEffect } from '../TextEffect/TextEffect';
import {
  getValueThreekit,
  setValueThreekit,
} from '../../../shared/function/ThreekitAttributeText';
import { URLS } from '../../../shared/providers/router/AppRouter';
import { useLocation } from 'react-router';

const defaultObjText = {
  'Add Text back 2': '',
  'Font Text back 2': 'Arial',
  'Rotate Text back 2': 0,
  'Text shadow back 2': false,
  'Text shadow color back 2': {
    r: 0,
    g: 0,
    b: 0,
  },
  'Text shadow opacity back 2': 0.5,
  'Text shadow Thickness back 2': 10,
  'Text shadow Offset X back 2': 0,
  'Text shadow Offset Y back 2': 0,
  'Text curve back 2': false,
  'Text curve Style back 2': 'Bowtie',
  'Text curve Amount back 2': 0.5,
  'Text Bookend Effect back 2': false,
  'Text Bookend Effect Size back 2': 128,
};

export const SettingsPersonaliztionCustomText = () => {
  const [attributes, setConfiguration]: any = useConfigurator();
  const dispatch = useDispatch();

  const location = useLocation();
  const [zoneText, setZoneText]: any = useState(undefined);

  const options = [
    { value: 'upperfron', label: 'Upper Fron', nameThrekit: 'front 1' },
    { value: 'upperback', label: 'Upper Back', nameThrekit: 'back 1' },
    { value: 'lowerback', label: 'Lower back', nameThrekit: 'back 2' },
  ];
  const optionsFonts = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Mogula', label: 'Modula' },
    { value: 'Rometano', label: 'Rometano' },
    { value: 'Times', label: 'Times' },
    { value: 'Running led', label: 'Running led' },
  ];

  const setText = (valueText: string) => {
    setConfiguration({ [`Add Text ${zoneText}`]: valueText });
  };

  const selectedFoneText = (value: any) => {
    const font = value['value'];
    setConfiguration({ [`Font Text ${zoneText}`]: font });
  };
  const selectedFoneSizeText = (sizeText: any) => {
    setConfiguration({ [`Size text ${zoneText}`]: sizeText });
  };

  const selectedZoneText = (value: any) => {
    const getObjectPropertiesForText = (
      config: Record<string, any>,
      keyZone: string
    ) => {
      return Object.fromEntries(
        Object.entries(config).filter(
          ([key]) =>
            (key.includes(keyZone) && key.includes('Text')) ||
            (key.includes(keyZone) && key.includes('text'))
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
      debugger;
      const nextObjText = cloneDeep(
        replaceKeywordInObject(prewText, zoneText, value['nameThrekit'])
      );
      debugger;
      const prewObjText = cloneDeep(
        replaceKeywordInObject(defaultObjText, 'back 2', zoneText)
      );
      debugger;

      setConfiguration({ ...nextObjText });
      setConfiguration({ ...prewObjText });
      setZoneText(value['nameThrekit']);
    } else {
      setZoneText(value['nameThrekit']);
    }
  };

  useEffect(() => {
    if (Object.keys(attributes).length > 0) {
      selectedZoneText(options[0]);
      dispatch(
        setCurentLayer({
          nameThreekit: options[0]['nameThrekit'],
        })
      );
    }
  }, []);

  useEffect(() => {
    if (location.pathname.includes(URLS.CUSTOM)) {
      setText('');
    }
  }, [location]);
  if (Object.keys(attributes).length < 1) return <></>;
  if (!zoneText) return <></>;

  const getValueThreekitFunc = getValueThreekit(zoneText, attributes);
  const setValueThreekitFunc = setValueThreekit(zoneText, setConfiguration);

  return (
    <div>
      <div className={s.wrapRotation}>
        {/* <RadSlider name="rotation" initialDegree={1} /> */}
      </div>
      <div className={s.wrap}>
        <Select
          title={'Text location'}
          options={options}
          value={options[0]['value']}
          onChange={(value) => {
            const valueObj = options.find((i) => i['value'] === value);
            if (valueObj) {
              selectedZoneText(valueObj);
              dispatch(
                setCurentLayer({
                  nameThreekit: valueObj['nameThrekit'],
                })
              );
            }
          }}
        />
      </div>
      <div className={s.wrap}>
        <LinerWrap name={'Enter text'}>
          <InputText
            placeholder={'Enter custom text'}
            value={getValueThreekitFunc('Add Text ')}
            onChange={(value: any) => {
              // console.log('value', value);
              const valueText = value['target']['value'];
              console.log('valueText', valueText);

              setText(valueText);
            }}
          />
        </LinerWrap>
      </div>
      <div className={s.wrap}>
        <div className={s.line}>
          <div className={s.boxFont}>
            <Select
              title={'Select font'}
              options={optionsFonts}
              value={getValueThreekitFunc('Font Text ')}
              onChange={(value) => {
                const valueObj = optionsFonts.find((i) => i['value'] === value);
                selectedFoneText(valueObj);
              }}
            />
          </div>

          <div className={s.boxheight}>
            <Counter
              title="Select height"
              value={getValueThreekitFunc('Size text ')}
              onChange={(value) => {
                console.log('value n', value);
                selectedFoneSizeText(value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={s.wrap}>
        <ListColor
          name={'Text color'}
          values={listColor}
          //   nameThreekit={}
          //@ts-ignore
          onClickBtn={(value: any) => {
            console.log(value);
          }}
        />
      </div>
      <div className="wrap">
        <TextEffect />
      </div>
    </div>
  );
};
