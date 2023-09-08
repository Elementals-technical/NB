import React, { useId } from 'react';
import s from './OverlayingPopup.module.scss';
import { Portal } from '../Portal/Portal';

export const OverlayingPopup = ({ children, onClose, isOpened }: any) => {
  const id = useId();
  if (!isOpened) {
    return <div key={id}></div>;
  }

  return (
    <Portal>
      <div className={s.container} role="dialog">
        <div
          className={s.overlay}
          role="button"
          tabIndex={0}
          onClick={onClose}
        ></div>
        {children}
      </div>
    </Portal>
  );
};
