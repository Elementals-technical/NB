import React, { useId, useState } from 'react';
import s from './ConfiguratorMenu.module.scss';
import { useNavigate, useParams, NavLink } from 'react-router-dom';

export const ConfiguratorMenu = ({ listMenu }: any) => {
  const navigate = useNavigate();
  let { configID } = useParams();
  if (!configID) return <></>;

  return (
    <div className={s.menu}>
      {Object.keys(listMenu).map((menuId) => {
        let itemClass = `${s.item}`;
        // if (idMain === menuId) itemClass = itemClass + ` ${s.active}`;

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
