import React from 'react';
import s from './View.module.scss';
import { LabelWrap } from '../../shared/UI/LabelWrap/LabelWrap';

import { PlayerElem } from '../Player/PlayerElem';
import { View360 } from '../../shared/assets/svg/View360';
import { ZoomInOut } from '../../shared/assets/svg/ZoomInOut';
import { BackIcon } from '../../shared/assets/svg/BackIcon';
import { useNavigate } from 'react-router-dom';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { Navigation } from '../../shared/UI/View/Navigation/Navigation';
import { URLS } from '../../shared/function/providers/router/AppRouter';
import { ZoomInOutPinch } from '../../shared/assets/svg/ZoomInOutPinch';
import { RotationText } from '../RotationText/RotationText';
import { useSelector } from 'react-redux';
import { getCurentLayer } from '../../shared/function/providers/redax/selectore';
export const View = () => {
  const navigate = useNavigate();

  const curentLayer = useSelector(getCurentLayer);
  const checkIfTextPanelActive =
    curentLayer.type === 'custom' && curentLayer.typeArea === 'text';

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
          <img src="/images/logo.svg" alt="" />
        </div>

        {checkIfTextPanelActive && (
          <RotationText name="rotationText" degree={0} />
        )}
        <PlayerElem />

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
