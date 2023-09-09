import React, { useId, useState } from 'react';
import s from './ConfiguratorMenu.module.scss';
import { useParams, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurentLayer } from '../../function/providers/redax/selectore';
import {
  resetObjectGraphic,
  resetObjectText,
} from '../../function/ThreekitAttributeText';
import { URL_PAGE } from '../../function/providers/router/AppRouter';
import { useConfigurator } from '@threekit-tools/treble/dist';

export const ConfiguratorMenu = ({ listMenu }: any) => {
  let { configID } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const curentLayer = useSelector(getCurentLayer);

  const [attributes, setConfiguration]: any = useConfigurator();

  if (!attributes) return <></>;
  if (Object.keys(attributes).length < 1) return <></>;
  if (!configID) return <></>;

  const onChange = (menuId: string) => {
    if (curentLayer['typeArea'] === 'text') {
      if (curentLayer && curentLayer['nameThreekit'])
        resetObjectText(setConfiguration, curentLayer['nameThreekit']);
    }
    if (curentLayer['typeArea'] === 'graphic') {
      if (curentLayer && curentLayer['nameThreekit'])
        resetObjectGraphic(setConfiguration, curentLayer['nameThreekit']);
    }
    navigate(`/${configID}/${menuId}`);
  };

  return (
    <div className={s.menu}>
      {Object.keys(listMenu).map((menuId) => {
        let itemClass = `${s.item}`;

        if (location.pathname.includes(menuId)) {
          itemClass = itemClass + ` ${s.active}`;
        }

        if (
          menuId === 'color' &&
          !location.pathname.includes('color') &&
          !location.pathname.includes('personalize') &&
          !location.pathname.includes('review')
        ) {
          itemClass = itemClass + ` ${s.active}`;
        }

        return (
          <div
            key={menuId}
            onClick={() => onChange(`${menuId}`)}
            className={itemClass}
          >
            <div className={itemClass}>{listMenu[menuId]}</div>
          </div>
        );
      })}
    </div>
  );
};
