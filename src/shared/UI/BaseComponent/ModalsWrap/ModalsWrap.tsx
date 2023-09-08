import { CloseIcon } from '../../../assets/svg/CloseIcon';
import s from './ModalsWrap.module.scss';

export const ModalsWrap = ({
  children,
  name,
  onCancel,
  onConfirm,
  isShowConfirm,
  addClassName,
}: any) => {
  let classContainer = `${s.wrap}`;
  addClassName ? (classContainer += ` ${addClassName}`) : classContainer;
  let classBtnCofirm = `${s.btn}`;
  if (isShowConfirm === false)
    classBtnCofirm = classBtnCofirm + ` ${s.disabled}`;
  return (
    <div className={classContainer}>
      <header>
        <div className={s.title}>
          <div className={s.name}>{name}</div>
        </div>
        <div className={s.close} onClick={onCancel}>
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
          <button className={classBtnCofirm} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </footer>
    </div>
  );
};
