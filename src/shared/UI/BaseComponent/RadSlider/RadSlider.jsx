import React, { useState, useEffect, useRef } from 'react';
import s from './RadSlider.module.scss';
export const RadSlider = ({ name, initialDegree = 0 }) => {
  const [degree, setDegree] = useState(initialDegree);
  const [moving, setMoving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    processDegree(degree);
  }, [degree]);

  const keepValueInRange = (value, min, max) => {
    return value >= max ? value - max : value < min ? value + max : value;
  };

  const processDegree = (value) => {
    const newDegree = keepValueInRange(value, 0, 360);
    setDegree(newDegree);
    sliderRef.current.style.setProperty('--degree', `${newDegree}deg`);
  };

  const getPointerDeg = (e) => {
    const { clientX: x, clientY: y } =
      e.touches && e.touches.length ? e.touches[0] : e;
    const metrics = sliderRef.current.getBoundingClientRect();
    return (
      Math.floor(
        Math.atan2(
          x - (metrics.left + metrics.width / 2),
          y - (metrics.top + metrics.height / 2)
        ) *
          (-180 / Math.PI)
      ) + 180
    );
  };

  const start = (e) => {
    setMoving(true);
    setDirty(true);
    const pointer = getPointerDeg(e) - degree;
    // setPointer(pointer);
  };

  const move = (e) => {
    if (moving) {
      let step = 1;
      if (e.shiftKey && e.metaKey) {
        step = 45;
      } else if (e.shiftKey) {
        step = 15;
      } else if (e.metaKey) {
        step = 30;
      }
      setDegree(Math.ceil((getPointerDeg(e) / step) * step));
      processDegree(degree);
    }
  };

  const stop = () => {
    setMoving(false);
  };

  return (
    // <div
    //   ref={sliderRef}
    //   className={`${s.rad_slider} ${moving ? `${s.moving}` : ''} ${
    //     dirty ? `${s.dirty}` : ''
    //   }`}
    //   name={name}
    //   onMouseDown={start}
    //   onMouseMove={move}
    //   onMouseUp={stop}
    //   onTouchStart={start}
    //   onTouchMove={move}
    //   onTouchEnd={stop}
    // >
    //   <div className={s.label}>{degree}&deg;</div>
    // </div>
    <></>
  );
};
