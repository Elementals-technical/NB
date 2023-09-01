import React, { useState } from 'react';
import s from './Configuration.module.scss';
import { TabComponent } from '../../shared/UI/TabComponent/TabComponent';
import { SectionBase } from '../../shared/data/structureUI';
import { LogoNSmal } from '../../shared/assets/svg/LogoNSmal';
import { ConfiguratorMenu } from '../../shared/UI/ConfiguratorMenu/ConfiguratorMenu';
import { PersonalizeGroup } from '../PersonalizeGroup/PersonalizeGroup';
import { Outlet, useParams } from 'react-router-dom';
import { DestributeComponent } from '../DestributeComponent/DestributeComponent';

const listMenu: any = {
  color: 'Colors & Design',
  personalize: 'Personalize',
  review: 'Review',
};
export const Configuration = () => {
  let { configID } = useParams();
  if (!configID) return <></>;

  return (
    <div className={s.configurator}>
      <div className={s.workspace}>
        <Outlet />
      </div>
      <div className={s.control}>
        <div className={s.logo}>
          <LogoNSmal />
        </div>
        <ConfiguratorMenu listMenu={listMenu} />
      </div>
    </div>
  );
};
