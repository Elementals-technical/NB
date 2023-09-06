import s from './LinerWrap.module.scss';

export const LinerWrap = ({ name, children }: any) => {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>{name}</div>
      </div>
      <div className={s.main}>{children}</div>
    </div>
  );
};
