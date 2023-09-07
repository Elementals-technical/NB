import React from 'react';
import s from './LabelWrap.module.scss';

export const LabelWrap = ({ name, svg, mobileName, mobileSvg }: any) => {
  let container = `${s.label}`;
  mobileName || mobileSvg ? (container += ` ${s.multiValues}`) : container;
  return (
    <div className={container}>
      <div className={s.icon}>{svg}</div>
      {mobileSvg && <div className={`${s.icon} ${s.mobile}`}>{mobileSvg}</div>}
      <div className={s.text}>{name}</div>
      {mobileName && (
        <div className={`${s.text} ${s.mobile}`}>{mobileName}</div>
      )}
    </div>
  );
};
