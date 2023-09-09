import { useLocation, useNavigate } from 'react-router';
import { LineParam } from '../../LineParam/LineParam';
import s from './ObjectTypeText.module.scss';
import { SettingsPersonaliztionText } from '../SettingsPersonaliztionText.tsx/SettingsPersonaliztionText';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurentLayer } from '../../../function/providers/redax/action';
import { setText } from '../../../../features/layer/PersonalizationObjectTextRuster/PersonalizationObjectTextRuster';
import { URLS } from '../../../function/providers/router/AppRouter';
import { useSelector } from 'react-redux';
import { getCurentLayer } from '../../../function/providers/redax/selectore';
import { useConfigurator } from '@threekit-tools/treble/dist';
export const listType = [
  {
    label: 'Custom Text',
    value: 'custom',
  },
  {
    label: 'Player Name',
    value: 'player-name',
  },
  {
    label: 'Player Number',
    value: 'player-number',
  },
];
export const ObjectTypeText = () => {
  const [TypeText, setTypeText] = useState('custom');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const curentLayer = useSelector(getCurentLayer);
  const location = useLocation();
  const [attributes, setConfiguration]: any = useConfigurator();

  if (!attributes) return <></>;
  if (Object.keys(attributes).length < 1) return <></>;

  useEffect(() => {
    navigate(listType[0]['value']);
    setTypeText(listType[0]['value']);
    dispatch(
      setCurentLayer({
        type: listType[0]['value'],
      })
    );
  }, []);
  useEffect(() => {
    debugger;
    if (location.pathname.includes(URLS.PLAYER_NAME)) {
      setText('PLAYER NAME', curentLayer['nameThreekit'], setConfiguration);
    }
    if (location.pathname.includes(URLS.PLAYER_NUMBER)) {
      setText('00', curentLayer['nameThreekit'], setConfiguration);
    }
    if (location.pathname.includes(URLS.CUSTOM)) {
      setText('', curentLayer['nameThreekit'], setConfiguration);
    }
  }, [location.pathname]);
  const onChange = (value: any) => {
    navigate(value);
    setTypeText(value);

    dispatch(
      setCurentLayer({
        type: value,
      })
    );
  };

  return (
    <div className={s.wrap}>
      <LineParam
        name="Object"
        values={listType}
        isSelectedId={TypeText}
        onClickBtn={(value) => onChange(value['value'])}
      />

      <SettingsPersonaliztionText typeObject={TypeText} />
    </div>
  );
};
