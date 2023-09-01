import React, { useState } from 'react';
import s from './Configuration.module.scss';
import { TabComponent } from '../../shared/UI/TabComponent/TabComponent';
import { SectionBase } from '../../shared/data/structureUI';
import { LogoNSmal } from '../../shared/assets/svg/LogoNSmal';
import { ConfiguratorMenu } from '../../shared/UI/ConfiguratorMenu/ConfiguratorMenu';
import { PersonalizeGroup } from '../PersonalizeGroup/PersonalizeGroup';

const listMenu: any = {
  color: 'Colors & Design',
  personalize: 'Personalize',
  review: 'Review',
};
export const Configuration = () => {
  const [idMain, setIdMain] = useState(Object.keys(listMenu)[1]);

  return (
    <div className={s.configurator}>
      <div className={s.workspace}>
        {idMain === 'color' && (
          <div className={s.group}>
            {/* <TabComponent data={SectionBase[0]['data']} /> */}
          </div>
        )}
        {idMain === 'personalize' && (
          <div className={s.group}>
            <PersonalizeGroup />
          </div>
        )}
      </div>
      <div className={s.control}>
        <div className={s.logo}>
          <LogoNSmal />
        </div>
        <ConfiguratorMenu
          listMenu={listMenu}
          idMain={idMain}
          setIdMain={setIdMain}
        />
      </div>
    </div>
  );
};
