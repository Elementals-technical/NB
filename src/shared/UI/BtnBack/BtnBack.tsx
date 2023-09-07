import React from 'react';
import s from './BtnBack.module.scss';

export const BtnBack = ({ icon, name, onClick, addClassName }: any) => {
  let container = `${s.btnPrew}`;
  addClassName ? (container += ` ${addClassName}`) : container;
  return (
    <div className={container} onClick={onClick}>
      <div className={s.icon} data-icon="icon">
        {icon}
      </div>
      <div className={s.text} data-text="text">
        {name}
      </div>
    </div>
  );
};
