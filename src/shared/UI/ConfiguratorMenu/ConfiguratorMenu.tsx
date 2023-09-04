import React, { useId, useState } from 'react';
import s from './ConfiguratorMenu.module.scss';
import { useParams, NavLink } from 'react-router-dom';

export const ConfiguratorMenu = ({ listMenu }: any) => {
  let { configID } = useParams();
  if (!configID) return <></>;

  return (
    <div className={s.menu}>
      {Object.keys(listMenu).map((menuId) => {
        let itemClass = `${s.item}`;

        return (
          <NavLink
            key={useId()}
            to={`${menuId}`}
            className={({ isActive, isPending }) =>
              isActive ? `${s.item} ${s.active}` : `${s.item}`
            }
          >
            <div className={itemClass}>{listMenu[menuId]}</div>
          </NavLink>
        );
      })}
    </div>
  );
};
