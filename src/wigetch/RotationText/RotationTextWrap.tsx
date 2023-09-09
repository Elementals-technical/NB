import React from 'react';
import { useSelector } from 'react-redux';
import { getCurentLayer } from '../../shared/function/providers/redax/selectore';
import { RotationText } from './RotationText';
import { useLocation } from 'react-router';

export const RotationTextWrap = () => {
  const curentLayer = useSelector(getCurentLayer);
  const location = useLocation();
  // /personalize/settings/text/custom
  const checkIfTextPanelActive =
    location.pathname.includes('/personalize/settings/text') &&
    curentLayer.typeArea === 'text';

  return (
    <>
      {checkIfTextPanelActive && (
        <RotationText
          name="rotationText"
          textZone={curentLayer['nameThreekit']}
          degree={0}
        />
      )}
    </>
  );
};
