import React, { useState, useEffect, useRef } from 'react';
import s from './RotationText.module.scss';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useDebounce } from './hooks/useDebounce';
interface RadSliderProps {
  name: string;
  degree?: number;
}

function normalizeDegree(degree: number) {
  if (degree <= 180) {
    return degree;
  }
  return degree - 360;
}

export const RotationText: React.FC<RadSliderProps> = ({
  name,
  degree = 0,
}) => {
  const [minDegree] = useState(0);
  const [maxDegree] = useState(360);
  const [moving, setMoving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [currentDegree, setCurrentDegree]: any = useState(degree);
  const [metrics, setMetrics] = useState<any>(null);
  const [pointer, setPointer] = useState<any>(null);
  const [attributes, setConfiguration]: any = useConfigurator();
  const debouncedValue = useDebounce<string>(currentDegree, 200);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onRotate = (degree: any) => {
    const normDegree = normalizeDegree(degree);
    console.log('normDegree: ', normDegree);
    setConfiguration({ [`Rotate Text front 1`]: normDegree });
  };

  useEffect(() => {
    onRotate(debouncedValue);
  }, [debouncedValue]);
  useEffect(() => {
    processDegree(degree);
  }, [degree]);

  const keepValueInRange = (
    value: number,
    min: number,
    max: number
  ): number => {
    let newValue =
      value >= max ? value - max : value < min ? value + max : value;
    return newValue;
  };

  const processDegree = (value: number) => {
    console.log('value: ', value);
    const newDegree = keepValueInRange(value, minDegree, maxDegree);
    console.log('newDegree: ', newDegree);
    setCurrentDegree(newDegree);
    //@ts-ignore
    wrapperRef.current.style.setProperty(`--degree`, newDegree + 'deg');
  };

  const getPointerDeg = (e: any) => {
    const x = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    const y = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    //@ts-ignore
    const metrics = wrapperRef.current.getBoundingClientRect();

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

  const start = (e: any) => {
    setMoving(true);
    setDirty(true);
    const metrics = wrapperRef.current?.getBoundingClientRect();
    setMetrics(metrics);
    setPointer(getPointerDeg(e) - currentDegree);
  };

  const move = (e: any) => {
    if (moving) {
      let step = 1;
      if (e.shiftKey && e.metaKey) {
        step = 45;
      } else if (e.shiftKey) {
        step = 15;
      } else if (e.metaKey) {
        step = 30;
      }
      const newDegree = Math.ceil((getPointerDeg(e) - pointer) / step) * step;
      setCurrentDegree(newDegree);
      processDegree(newDegree);
    }
  };

  const stop = () => {
    setMoving(false);
  };

  return (
    <div className={s.wrapper}>
      <div
        className={`${s.radSlider} ${moving ? s.moving : ''} ${
          dirty ? s.dirty : ''
        }`}
        ref={wrapperRef}
        data-name={name}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={stop}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={stop}
      >
        <div className={s.label}>{currentDegree}&deg;</div>
      </div>
      <div className={s.info}>
        <div className={s.title}>Text rotation </div>
        <div className={s.subtitle}>(1° Step)</div>
      </div>
    </div>
  );
};
