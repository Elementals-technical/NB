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
import { Navigation } from '../../shared/UI/View/Navigation/Navigation';
import { URLS } from '../../shared/function/providers/router/AppRouter';
import { ZoomInOutPinch } from '../../shared/assets/svg/ZoomInOutPinch';
export const View = () => {
  const navigate = useNavigate();
  console.log('test_1');

  return (
    <>
      <div className={s.back_bottom}>
        <BtnBack
          icon={<BackIcon />}
          name={'Close personalization'}
          onClick={() => navigate(URLS.ROOT)}
          addClassName={s.back}
        />
      </div>

      <Navigation />

      <div className={s.viewPlayer}>
        <div className={s.logo}>
          <img src="images/logo.svg" alt="" />
        </div>
        {/* 
        <PlayerElem /> */}
        <div className={s.wrap_icon}>
          <LabelWrap svg={<View360 />} name="360° Preview" />
          <LabelWrap
            svg={<ZoomInOut />}
            mobileSvg={<ZoomInOutPinch />}
            name="Use mouse wheel to zoom in/out"
            mobileName="Pinch gesture to zoom in/out"
          />
        </div>
      </div>
    </>
  );
};
