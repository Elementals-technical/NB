import { CloseIcon } from '../../../assets/svg/CloseIcon';
import s from './ModalsWrap.module.scss';

export const ModalsWrap = ({ children, name, onCancel, onConfirm }: any) => {
  return (
    <div className={s.wrap}>
      <header>
        <div className={s.title}>
          <div className={s.name}>{name}</div>
        </div>
        <div className={s.close}>
          <CloseIcon />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div></div>

        <div className={s.wrap_box}>
          <button className={s.btn_trancperent} onClick={onCancel}>
            Cancel
          </button>
          <button className={s.btn} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </footer>
    </div>
  );
};
