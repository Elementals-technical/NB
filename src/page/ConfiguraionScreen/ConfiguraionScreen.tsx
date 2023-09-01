import React from 'react';
import s from './ConfiguraionScreen.module.scss';
import { View } from '../../wigetch/View/View';
import { LineParam } from '../../shared/UI/LineParam/LineParam';
import { SectionBase } from '../../shared/data/structureUI';
import { ListColor } from '../../shared/UI/ListColor/ListColor';
import { TabComponent } from '../../shared/UI/TabComponent/TabComponent';
import { Configuration } from '../../wigetch/Configuration/Configuration';
export const ConfiguraionScreen = () => {
  SectionBase;
  return (
    <>
      <div className={s.page}>
        <View />

        <div className="wrap_configurator">
          <Configuration />
        </div>
      </div>
    </>
  );
};
