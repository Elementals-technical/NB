import { ChangeEvent, useEffect, useState } from 'react';
import s from './InputText.module.scss';

export const InputText = ({ onChange, defaultValue, ...props }: any) => {
  const [valueState, setValue] = useState(defaultValue);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log('value', value);

    onChange(value);
    setValue(value);
  };

  return (
    <input
      value={valueState}
      className={s.input}
      {...props}
      onChange={handleInputChange}
    ></input>
  );
};
