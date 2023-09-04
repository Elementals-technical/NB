import { useNavigate } from 'react-router';
import { LineParam } from '../../LineParam/LineParam';
import s from './ObjectTypeText.module.scss';
import { SettingsPersonaliztionText } from '../SettingsPersonaliztionText.tsx/SettingsPersonaliztionText';
import { useEffect, useState } from 'react';

export const ObjectTypeText = () => {
  const [TypeText, setTypeText] = useState('custom');
  const navigate = useNavigate();

  const listType = [
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

  useEffect(() => {
    navigate(listType[0]['value']);
    setTypeText(listType[0]['value']);
  }, []);

  const onChange = (value: any) => {
    navigate(value);
    setTypeText(value);
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
