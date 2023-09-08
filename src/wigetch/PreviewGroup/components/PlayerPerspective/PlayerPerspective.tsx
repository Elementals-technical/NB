import s from '../../PreviewGroup.module.scss';
import { FC } from 'react';
import test from '../../utils/assets/Rectangle.png';
export const PlayerPerspective: FC = () => {
  return (
    <div className={s.playerWrapper}>
      <div className={s.playerScroll}>
        <div className={s.playerItem}>
          <div className={s.playerTitle}>Front</div>
          <div className={s.playerImg}>
            <img src={test} alt="" />
          </div>
        </div>
        <div className={s.playerItem}>
          <div className={s.playerTitle}>Back</div>

          <div className={s.playerImg}>
            <img src={test} alt="" />
          </div>
        </div>
        <div className={s.playerItem}>
          <div className={s.playerTitle}>Right</div>
          <div className={s.playerImg}>
            <img src={test} alt="" />
          </div>
        </div>
        <div className={s.playerItem}>
          <div className={s.playerTitle}>Left</div>
          <div className={s.playerImg}>
            <img src={test} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
