import React, { useState } from 'react';
import s from './ConfiguratorMenu.module.scss';

export const ConfiguratorMenu = ({ listMenu, idMain, setIdMain }: any) => {
  return (
    <div className={s.menu}>
      {Object.keys(listMenu).map((menuId) => {
        let itemClass = `${s.item}`;
        if (idMain === menuId) itemClass = itemClass + ` ${s.active}`;

        return (
          <div onClick={() => setIdMain(menuId)} className={itemClass}>
            {listMenu[menuId]}
          </div>
        );
      })}
    </div>
  );
};
