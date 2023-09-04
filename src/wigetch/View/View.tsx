import React from 'react';
import s from './View.module.scss';
import { LabelWrap } from '../../shared/UI/LabelWrap/LabelWrap';
import { BtnNavigate } from '../../shared/UI/BtnNavigate/BtnNavigate';

import { PlayerElem } from '../Player/PlayerElem';
import { View360 } from '../../shared/assets/svg/View360';
import { ZoomInOut } from '../../shared/assets/svg/ZoomInOut';
import { SaveDesign } from '../../shared/assets/svg/SaveDesign';
import { TransferIcon } from '../../shared/assets/svg/TransferIcon';
import { BackIcon } from '../../shared/assets/svg/BackIcon';
import { NavLink, useNavigate } from 'react-router-dom';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { LoaderWrap } from '../../shared/UI/LoaderWrap.tsx/LoaderWrap';
export const View = () => {
  const navigate = useNavigate();
  return (
    <div className={s.view}>
      {/* <LoaderWrap /> */}
      <div className={s.back_bottom}>
        <BtnBack
          icon={<BackIcon />}
          name={'Close personalization'}
          onClick={() => navigate('/')}
        />
      </div>

      <div className={s.navigation}>
        <div className={s.logoText}>
          <div className={s.title}>Jersey</div>
          <div className={s.subTitle}>Custom uniform</div>
        </div>
        <div className={s.navigate_box}>
          <BtnNavigate svg={<SaveDesign />} name={<>Save design</>} />
          <BtnNavigate
            svg={<TransferIcon />}
            name={
              <>
                Transfer design to <strong>W Hoodie</strong>
              </>
            }
          />
        </div>
        <div className=""></div>
      </div>

      <div className={s.viewPlayer}>
        <div className={s.logo}>
          <img src="images/logo.svg" alt="" />
        </div>

        <PlayerElem />
        <div className={s.wrap_icon}>
          <LabelWrap svg={<View360 />} name="360° Preview" />
          <LabelWrap
            svg={<ZoomInOut />}
            name="Use mouse wheel to zoom in/out"
          />
        </div>
      </div>
    </div>
  );
};
