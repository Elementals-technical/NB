import { FC, useState } from 'react';
import s from './HintRoster.module.scss';
import { CloseIcon } from '../../../../../shared/assets/svg/CloseIcon';

export const HintRoster: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className={s.hint}>
          <span>This product requires a quantity minimum of 6</span>
          <CloseIcon
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
};
