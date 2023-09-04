import React from 'react';
import s from './BtnBack.module.scss';

export const BtnBack = ({ icon, name, onClick }: any) => {
  return (
    <div className={s.btnPrew} onClick={onClick}>
      <div className={s.icon}>{icon}</div>
      <div className={s.text}>{name}</div>
    </div>
  );
};
