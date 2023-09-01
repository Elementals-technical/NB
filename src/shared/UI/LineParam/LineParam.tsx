import { useId } from 'react';
import s from './LineParam.module.scss';
interface Props {
  name: string;
  values: any;
  isSelectedId: string;

  onClickBtn: (value: any) => void;
}
export const LineParam = ({
  name,
  values,
  onClickBtn,
  isSelectedId,
}: Props) => {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>{name}</div>
      </div>
      <div className={s.main}>
        {values.map((value: any) => {
          let itemClass = `${s.item} `;
          if (isSelectedId === value['value']) {
            itemClass = itemClass + ` ${s.active}`;
          }

          return (
            <div
              key={useId()}
              onClick={() => onClickBtn(value)}
              className={itemClass}
            >
              <div className={s.label}> {value['label']}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
