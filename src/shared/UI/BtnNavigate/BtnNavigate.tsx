import React from 'react';
import s from './BtnNavigate.module.scss';

export const BtnNavigate = ({ svg, name, clickHandler, isBtn }: any) => {
  let btnButton = `${s.button}`;
  if (isBtn === 'save') btnButton = btnButton + ` ${s.save}`;
  if (isBtn === 'transfer') btnButton = btnButton + ` ${s.transfer}`;

  return (
    <div className={btnButton} onClick={clickHandler}>
      <div className={s.icon}>{svg}</div>
      <div className={s.text}>{name}</div>
    </div>
  );
};
