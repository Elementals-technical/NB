import { CloseIcon } from '../../../assets/svg/CloseIcon';
import s from './SettingsPersonaliztionText.module.scss';

export const SettingsPersonaliztionText = ({ typeObject }: any) => {
  return (
    <>
      {typeObject === 'custom' && (
        <div className={s.wrap}>
          <div className={s.text}>
            Use this for Team, School or Company Names, etc. All pieces will
            include this text.
          </div>
          <div className="iconClose">{/* <CloseIcon /> */}</div>
        </div>
      )}
      {typeObject === 'player-name' && (
        <div className={s.wrap}>
          <div className={s.text}>
            You will see “PLAYER NAME” for illustrative purposes only. This text
            can be customized per piece in the roster section.
          </div>
          <div className="iconClose">{/* <CloseIcon /> */}</div>
        </div>
      )}
      {typeObject === 'player-number' && (
        <div className={s.wrap}>
          <div className={s.text}>
            You will see “00” for illustrative purposes only. This text can be
            customized per piece in the roster section.
          </div>
          <div className="iconClose">{/* <CloseIcon /> */}</div>
        </div>
      )}
    </>
  );
};
