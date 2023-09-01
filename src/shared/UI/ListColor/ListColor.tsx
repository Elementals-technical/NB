import { useId, useState } from 'react';
import { BtnColor } from '../BtnColor/BtnColor';
import s from './ListColor.module.scss';
interface Props {
  name: string;
  values: any;
  isSelectedId: string;

  onClickBtn: () => void;
}
export const ListColor = ({ name, values }: Props) => {
  const [idValue, setValue] = useState(values[0]['value']);

  const selectedColor = (id: string) => {
    setValue(id);
  };

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>{name}</div>
        <div className={s.value}>White</div>
      </div>
      <div className={s.main}>
        {values.map((value: any) => {
          return (
            <BtnColor
              key={useId()}
              //   key={uuidv4()}
              isActive={value['value'] === idValue}
              value={value}
              onClick={(value) => {
                selectedColor(value['value']);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
