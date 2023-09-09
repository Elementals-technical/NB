import React from 'react';
import s from './PersonalizeScreenStart.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import { URL_PAGE } from '../../function/providers/router/AppRouter';
export const PersonalizeScreenStart = ({
  name = 'Personalize product',
}: any) => {
  let { configID } = useParams();
  if (!configID) return <></>;
  return (
    <div className={s.personalize_start}>
      <div className={s.title}>{name}</div>
      <div className={s.description}>
        Right now you don’t have any <strong>personalization</strong>. Customize
        your product with graphics, team names and player names!
      </div>
      <NavLink to={URL_PAGE.personalizePageSetting(configID)} className={s.btn}>
        Add personalization
      </NavLink>
    </div>
  );
};
