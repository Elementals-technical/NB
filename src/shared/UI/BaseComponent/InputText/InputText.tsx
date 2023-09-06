import s from './InputText.module.scss';

export const InputText = ({ onChange, ...props }: any) => {
  return (
    <input
      className={s.input}
      {...props}
      type="text"
      onChange={onChange}
    ></input>
  );
};
