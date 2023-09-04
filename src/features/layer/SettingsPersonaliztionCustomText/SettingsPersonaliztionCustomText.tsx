import React, { useId, useState } from 'react';
import s from './SettingsPersonaliztionCustomText.module.scss';

import Select, { useStateManager } from 'react-select';
import { ListColor } from '../../../shared/UI/ListColor/ListColor';
import { listColor } from '../../../shared/data/structureUI';
import { LineParam } from '../../../shared/UI/LineParam/LineParam';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { cloneDeep } from 'lodash';

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

  const [ZoneText, setZoneText]: any = useState(undefined);
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

  const optionsEffect = [
    { value: 'None', label: 'None' },
    { value: 'Bowtie', label: 'Bowtie' },
    { value: 'Arch', label: 'Arch' },
    { value: 'Bridge', label: 'Bridge' },
  ];

  const values = [
    {
      label: 'Curve',
      value: 'Curve',
    },
    {
      label: 'Bookend',
      value: 'Bookend',
    },
    {
      label: 'Shadow',
      value: 'Shadow',
    },
  ];

  const selectedZoneText = (value: any) => {
    const getObjectPropertiesForText = (
      config: Record<string, any>,
      keyZone: string
    ) => {
      return Object.fromEntries(
        Object.entries(config).filter(
          ([key]) => key.includes(keyZone) && key.includes('Text')
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

    if (ZoneText) {
      const prewText = cloneDeep(
        getObjectPropertiesForText(
          window.threekit.configurator.getConfiguration(),
          ZoneText
        )
      );
      const nextObjText = cloneDeep(
        replaceKeywordInObject(prewText, ZoneText, value['nameThrekit'])
      );
      const prewObjText = cloneDeep(
        replaceKeywordInObject(defaultObjText, 'back 2', ZoneText)
      );

      setConfiguration({ ...nextObjText });
      setConfiguration({ ...prewObjText });
      setZoneText(value['nameThrekit']);
    } else {
      setZoneText(value['nameThrekit']);
    }
  };
  const setText = (value: any) => {
    const valueText = value['target']['value'];
    console.log('{ [`Add Text ${ZoneText}`]: valueText }', {
      [`Add Text ${ZoneText}`]: valueText,
    });

    setConfiguration({ [`Add Text ${ZoneText}`]: valueText });
  };

  const selectedFoneText = (value: any) => {
    const font = value['value'];
    setConfiguration({ [`Font Text ${ZoneText}`]: font });
  };
  const selectedFoneSizeText = (value: any) => {
    const sizeText = value['target']['value'];
    setConfiguration({ [`Size text ${ZoneText}`]: sizeText });
  };

  return (
    <div>
      <div className={s.wrap}>
        <div className={s.header}>
          <div className={s.title}>Text location</div>
        </div>
        <div className={s.main}>
          <Select
            options={options}
            onChange={(value) => {
              selectedZoneText(value);
            }}
          />
        </div>
      </div>
      <div className={s.wrap}>
        <div className={s.header}>
          <div className={s.title}>Enter text</div>
        </div>
        <div className={s.main}>
          <input type="text" onChange={setText}></input>
        </div>
      </div>

      <div className="line">
        <div className={s.wrap}>
          <div className={s.header}>
            <div className={s.title}>Select font</div>
          </div>
          <div className={s.main}>
            <Select
              options={optionsFonts}
              onChange={(value) => {
                selectedFoneText(value);
              }}
            />
          </div>
        </div>
        <div className={s.header}>
          <div className={s.title}>Select height</div>
        </div>
        <div className={s.main}>
          <input type="number" onChange={selectedFoneSizeText}></input>
        </div>
      </div>
      <div className="">
        1
        <ListColor
          name={'Text color'}
          values={listColor}
          //@ts-ignore
          onClickBtn={(value: any) => {
            console.log(value);
          }}
        />
      </div>

      <div className="">
        <LineParam
          key={useId()}
          name={'Choose text effects'}
          values={values}
          isSelectedId={values[0]['value']}
          //@ts-ignore
          onClickBtn={(value: any) => {
            // selectedSection(value['value']);
          }}
        />
      </div>
      <div className="line">
        <div className={s.wrap}>
          <div className={s.header}>
            <div className={s.title}>Text effect</div>
          </div>
          <div className={s.main}>
            <Select options={optionsEffect} />
          </div>
        </div>
        <div className={s.header}>
          <div className={s.title}>Select height</div>
        </div>
        <div className={s.main}>
          <input type="number"></input>
        </div>
      </div>
    </div>
  );
};
