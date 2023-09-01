import React from 'react';
import s from './BtnNavigate.module.scss';

export const BtnNavigate = ({ svg, name }: any) => {
  return (
    <div className={s.button}>
      <div className={s.icon}>{svg}</div>
      <div className={s.text}>{name}</div>
    </div>
  );
};
