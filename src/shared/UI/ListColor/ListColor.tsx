import { useId, useState } from 'react';
import { BtnColor } from '../BtnColor/BtnColor';
import s from './ListColor.module.scss';
import { useAttribute } from '@threekit-tools/treble/dist';
interface Props {
  label: string;
  values: any;
  isSelectedId: string;
  onClickBtn: () => void;
  [key: string]: any;
}
export const ListColor = ({ label, values, ...props }: Props) => {
  const [idValue, setValue] = useState(values[0]['value']);

  const selectedColor = (id: string) => {
    setValue(id);
    debugger;
  };
  debugger;

  const [attribute, setAttribute]: any = useAttribute(props['nameThreekit']);

  debugger;
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>{label}</div>
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
