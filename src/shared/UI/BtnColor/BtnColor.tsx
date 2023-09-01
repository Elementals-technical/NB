import React, { CSSProperties } from 'react';
import s from './BtnColor.module.scss';

/**
 * Props для компонента BtnColor
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnColorProps {
  onClick?: (value: any) => void;
  value: any;
  isActive: boolean;
}

export const BtnColor: React.FC<BtnColorProps> = ({
  onClick,
  value,
  isActive,
}) => {
  /**
   * Обробник кліку на кнопці
   */
  const handleClick = (value: any) => {
    if (onClick) {
      onClick(value);
    }
  };
  debugger;

  let style: CSSProperties = {
    background: value['hex'],
  };

  let styleBorder: CSSProperties = {
    borderColor: value['hex'],
  };

  if (value['hex'].toLowerCase().includes('#fff')) {
    styleBorder = {
      ...styleBorder,
      border: '1px solid #000',
    };
  }

  if (isActive) {
    styleBorder = {
      ...styleBorder,
      border: '2px solid #CF202E',
      padding: '2px',
    };

    if (value['hex'].toLowerCase().includes('#fff')) {
      style = {
        ...style,
        border: '1px solid #000',
      };
    }
  }

  let wrap = `${s.wrap} `;
  if (isActive) wrap = wrap + `${s.active}`;

  return (
    <div className={wrap} onClick={() => handleClick(value)}>
      <div className={s.colorBorder} style={styleBorder}>
        <div className={s.color} style={style}></div>
      </div>
      <div className={s.name}>{value['label']}</div>
    </div>
  );
};
