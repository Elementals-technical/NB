import React, { useEffect, useId, useState } from 'react';
import s from './SettingsPersonaliztionRosterList.module.scss';

import { useConfigurator } from '@threekit-tools/treble/dist';
import { BtnBack } from '../../../shared/UI/BtnBack/BtnBack';
import { BackIcon } from '../../../shared/assets/svg/BackIcon';
import { useNavigate } from 'react-router';
import { PlayerInput } from './components/PlayerInput/PlayerInput';
import { HintRoster } from './components/HintRoster/HintRoster';
import { PlusIcon } from '../../../shared/assets/svg/PlusIcon';
import { addObjectWithAutoId, genEmptyValues } from './utils/functions';
import { inputT } from './utils/types';

export const SettingsPersonaliztionRosterList = () => {
  const [attributes, setConfiguration]: any = useConfigurator();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState<inputT[]>([]);
  const showNumber = true;

  useEffect(() => {
    const values = genEmptyValues(6);
    setInputData(values);
  }, []);
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <BtnBack
          icon={<BackIcon />}
          name={'Close personalization'}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className={s.main}>
        <HintRoster />
        <div className={s.note}>
          <span>Please note:</span> The actual size of player names and numbers
          may vary from the preview image.
        </div>
        <div className={s.valueTitle}>Enter player name</div>
        <div className={s.scrollContainer}>
          <div className={s.values}>
            {inputData &&
              inputData.map((item: inputT, index: number) => {
                return (
                  <PlayerInput
                    addClassName={s.value}
                    showNumber={showNumber}
                    key={`roster_input_${index}`}
                    inputData={inputData}
                    setInputData={setInputData}
                    currentValue={item}
                  />
                );
              })}
          </div>
        </div>
        <div
          className={s.add}
          onClick={() => {
            if (inputData) {
              const updatedItems = addObjectWithAutoId(inputData);
              setInputData(updatedItems);
            }
          }}
        >
          <PlusIcon />
          <span>{`Add another name${showNumber ? ' & number' : ''}`}</span>
        </div>
      </div>
      <footer className={s.footer}>
        <div className={s.cancel} onClick={() => navigate(-1)}>
          Cancel
        </div>
        <div
          className={`${s.save} ${inputData.length < 6 && s.disable}`}
          onClick={() => navigate(-1)}
        >
          Save roster list
        </div>
      </footer>
    </div>
  );
};
