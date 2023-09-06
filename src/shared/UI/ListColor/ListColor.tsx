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
  const [attribute, setAttribute]: any = useAttribute(props['nameThreekit']);

  console.log('---', attribute);
  if (!attribute) return <></>;
  const selectedColor = (id: string) => {
    setAttribute(id);
  };

  const valueThreekit = [
    {
      label: 'Grey',
      value: 'Grey',
      hex: '#8A8E8C',
    },
    {
      label: 'Red',
      value: 'Red',
      hex: '#E30D31',
    },
    {
      label: 'Yellow',
      value: 'Yellow',
      hex: '#fde408',
    },
    {
      label: 'Black',
      value: 'Black',
      hex: '#161516',
    },
    {
      label: 'Forest Green',
      value: 'Green',
      hex: '#385644',
    },
  ];
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>{label}</div>
        <div className={s.value}>White</div>
      </div>
      <div className={s.main}>
        {valueThreekit.map((value: any) => {
          return (
            <BtnColor
              key={value['value']}
              //   key={uuidv4()}
              isActive={value['value'] === attribute['value']}
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
