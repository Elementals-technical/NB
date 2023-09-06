import React from 'react';
import s from './PersonalizeScreenStart.module.scss';
import { NavLink } from 'react-router-dom';
export const PersonalizeScreenStart = () => {
  return (
    <div className={s.personalize_start}>
      <div className={s.title}>Personalize product</div>
      <div className={s.description}>
        Right now you don’t have any <strong>personalization</strong>. Customize
        your product with graphics, team names and player names!
      </div>
      <NavLink to={`settings`} className={s.btn}>
        Add personalization
      </NavLink>

      {/* <NavLink to={`roster-list`} className={s.rosterBtn}>
        Enter Roster List (test)
      </NavLink> */}
    </div>
  );
};
