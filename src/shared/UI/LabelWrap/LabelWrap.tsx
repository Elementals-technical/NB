import React from 'react';
import s from './LabelWrap.module.scss';

export const LabelWrap = ({ name, svg }: any) => {
  return (
    <div className={s.label}>
      <div className={s.icon}>{svg}</div>
      <div className={s.text}>{name}</div>
    </div>
  );
};
