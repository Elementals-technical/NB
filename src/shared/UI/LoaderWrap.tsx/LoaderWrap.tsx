import React from 'react';
import s from './LoaderWrap.module.scss';
export const LoaderWrap = () => {
  return (
    <div className={s.wrap}>
      <div className={s.rotate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="35" stroke="white" stroke-width="10" />
          <path
            d="M40 5C44.5963 5 49.1475 5.9053 53.3939 7.66422C57.6403 9.42313 61.4987 12.0012 64.7487 15.2513C67.9988 18.5013 70.5769 22.3597 72.3358 26.6061C74.0947 30.8525 75 35.4037 75 40"
            stroke="#CF202E"
            stroke-width="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
