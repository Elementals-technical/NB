import { FC, useEffect, useId, useState } from 'react';
import s from './PlayerInput.module.scss';
import { Trash } from '../../../../../shared/assets/svg/Trash';
import { ShowIcon } from '../../../../../shared/assets/svg/ShowIcon';
import { HideIcon } from '../../../../../shared/assets/svg/HideIcon';
import { PlayerInputT } from '../../utils/types';
import {
  removeObjectById,
  resetShowProperty,
  updateObjectById,
} from '../../utils/functions';
import { useSelector } from 'react-redux';
import {
  getSelectedNameRuster,
  getSelectedNumberRuster,
} from '../../../../../shared/function/providers/redax/selectore';
import { useConfigurator } from '@threekit-tools/treble/dist';

export const PlayerInput: FC<PlayerInputT> = ({ ...props }) => {
  const {
    addClassName,
    inputData,
    setInputData,
    currentValue,
    showNumber = false,
  } = props;
  let container = `${s.wrapper}`;
  addClassName ? (container += ` ${addClassName}`) : container;
  showNumber ? (container += ` ${s.showNumber}`) : container;
  const nameId = useId();
  const numberId = useId();
  const [nameValue, setNameValue] = useState(currentValue.name);
  const [numberValue, setNumberValue] = useState(currentValue.number);
  const [attributes, setConfiguration]: any = useConfigurator();
  const layautNameForRuster = useSelector(getSelectedNameRuster);
  const layautNumberForRuster = useSelector(getSelectedNumberRuster);

  useEffect(() => {
    if (
      nameValue !== currentValue.name ||
      numberValue !== currentValue.number
    ) {
      const newArray = inputData;
      const currentId = currentValue.id;
      const updatedItems = updateObjectById(newArray, currentId, {
        name: nameValue,
        number: numberValue,
      });
      setInputData(updatedItems);
    }
  }, [nameValue, numberValue]);

  useEffect(() => {
    setNameValue(currentValue.name);
    setNumberValue(currentValue.number);
  }, [inputData]);

  function showOrHideValue() {
    const newArray = inputData;
    const currentId = currentValue.id;
    let resetShowItems = newArray;
    if (!currentValue.show) {
      resetShowItems = resetShowProperty(newArray);
    }
    const updatedItems = updateObjectById(resetShowItems, currentId, {
      show: !currentValue.show,
    });

    let obj = {};
    if (layautNumberForRuster) {
      obj = {
        ...obj,
        [`Add Text ${layautNumberForRuster['nameThreekit']}`]:
          !currentValue.show ? currentValue.name : '',
      };
    }

    if (layautNameForRuster) {
      obj = {
        ...obj,
        [`Add Text ${layautNameForRuster['nameThreekit']}`]: !currentValue.show
          ? currentValue.name
          : '',
      };
    }

    const setText = (valueText: string) => {};
    if (!currentValue.show) {
      setConfiguration({ ...obj });
    }
    setInputData(updatedItems);
  }
  function deleteValue() {
    const newArray = inputData;
    const currentId = currentValue.id;

    let obj = {};
    if (layautNumberForRuster) {
      obj = {
        ...obj,
        [`Add Text ${layautNumberForRuster['nameThreekit']}`]: '',
      };
    }

    if (layautNameForRuster) {
      obj = {
        ...obj,
        [`Add Text ${layautNameForRuster['nameThreekit']}`]: '',
      };
    }

    if (currentValue.show) {
      setConfiguration({ ...obj });
    }

    const updatedArray = removeObjectById(newArray, currentId);
    setInputData(updatedArray);
  }
  return (
    <div className={container}>
      <div className={s.show} onClick={() => showOrHideValue()}>
        {currentValue.show ? <ShowIcon /> : <HideIcon />}
      </div>
      {layautNameForRuster && (
        <label htmlFor={nameId} className={s.name}>
          <input
            id={nameId}
            type="text"
            placeholder="Enter the player’s name"
            value={nameValue}
            onChange={(e: any) => setNameValue(e.target.value)}
          />
        </label>
      )}

      {layautNumberForRuster && (
        <label className={s.number} htmlFor={numberId}>
          <input
            id={numberId}
            type="number"
            placeholder="Player #"
            value={numberValue}
            onChange={(e: any) => setNumberValue(e.target.value)}
          />
        </label>
      )}

      <div className={s.delete} onClick={() => deleteValue()}>
        <Trash />
      </div>
    </div>
  );
};
