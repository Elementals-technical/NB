import { FC, useEffect, useState } from 'react';
import s from './StartTutorial.module.scss';

export type tutorialItemT = {
  id: number;
  src: any;
  title: string;
  subtitle: string;
};
type StartTutorialT = {
  data: tutorialItemT[];
};
export const StartTutorial: FC<StartTutorialT> = ({ ...props }) => {
  const { data } = props;

  const [activeSlide, setActiveSlide] = useState(data[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide: any) => {
        const nextSlide = prevSlide + 1;
        if (nextSlide >= data.length) {
          return 0;
        } else {
          return nextSlide;
        }
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={s.wrapper}>
      {data.map((item: tutorialItemT, index: number) => {
        return (
          <div
            className={`${s.item} ${item.id === activeSlide && s.active}`}
            key={`tutorial_${index}`}
          >
            <div className={s.img}>
              <img src={item.src} alt={`$tutorial_${index}`} />
            </div>
            <div className={s.content}>
              <div className={s.title}>{item.title}</div>
              <div className={s.subtitle}>{item.subtitle}</div>
            </div>
          </div>
        );
      })}
      <div className={s.nav}>
        {data.map((item: tutorialItemT, index: number) => {
          return (
            <div
              className={`${s.point} ${item.id === activeSlide && s.active}`}
              key={`point_tutorial_${index}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
