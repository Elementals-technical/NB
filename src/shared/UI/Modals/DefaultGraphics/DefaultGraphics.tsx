import { useState } from 'react';
import s from './DefaultGraphics.module.scss';

export const listDefaultGraphicsImg = [
  {
    nameThreekit: 'trace',
    label: 'Bear Paw',
    img: 'images/defaultLogo/bear_paw.png',
  },
  {
    nameThreekit: 'bear',
    label: 'Bear Head',
    img: 'images/defaultLogo/bear.png',
  },
  {
    nameThreekit: 'NB_01',
    label: 'NB 01',
    img: 'images/defaultLogo/bear.png',
  },
  {
    nameThreekit: 'NB_02',
    label: 'NB 02',
    img: 'images/defaultLogo/bear.png',
  },
];

export const DefaultGraphics = ({ onChange }: any) => {
  const [ActiveItem, setActiveItem] = useState('');

  const onSelectedItem = (value: string) => {
    setActiveItem(value);
    onChange(value);
  };

  return (
    <div className={s.list}>
      {listDefaultGraphicsImg.map((icon) => {
        let item = `${s.item} `;

        if (ActiveItem === icon['nameThreekit']) item = item + ` ${s.active}`;

        return (
          <div
            className={item}
            onClick={() => onSelectedItem(icon['nameThreekit'])}
          >
            <div className={s.imgWrap}>
              <img src={icon['img']} />
            </div>
            <div className={s.name}>{icon['label']}</div>
          </div>
        );
      })}
    </div>
  );
};
