import React from 'react';
import s from './PersonalizeScreenStart.module.scss';
export const PersonalizeScreenStart = () => {
  return (
    <div className={s.personalize_start}>
      <div className={s.title}>Personalize product</div>
      <div className={s.description}>
        Right now you don’t have any <strong>personalization</strong>. Customize
        your product with graphics, team names and player names!
      </div>
      <button className={s.btn}>Add personalization</button>
    </div>
  );
};
