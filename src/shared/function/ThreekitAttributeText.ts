import { setConfiguration } from '@threekit-tools/treble/dist/store/attributes';
import {
  defaultObjText,
  replaceKeywordInObject,
} from '../../features/layer/PersonalizationObjectTextRuster/PersonalizationObjectTextRuster';
import { defaultObjLogo } from '../../features/layer/PersonalizationObjectGraphics/PersonalizationObjectGraphics';

export const getValueThreekit =
  (nameText: string, attributes: any) => (namePropertyThreekit: string) => {
    const nameAttr = `${namePropertyThreekit}${nameText}`;
    const attribut = attributes[nameAttr];

    return attribut['value'];
  };

export const setValueThreekit =
  (nameText: string, setConfiguration: any) =>
  (namePropertyThreekit: string, value: any) => {
    const nameAttr = `${namePropertyThreekit}${nameText}`;
    return setConfiguration({ [nameAttr]: value });
  };

export const resetObjectText = (
  setConfiguration: any,
  nameThreekit: string
) => {
  let objText = replaceKeywordInObject(defaultObjText, 'back 2', nameThreekit);
  debugger;
  setConfiguration({
    ...objText,
  });
};
export const resetObjectGraphic = (
  setConfiguration: any,
  nameThreekit: string
) => {
  let objGraphic = replaceKeywordInObject(
    defaultObjLogo,
    'back 2',
    nameThreekit
  );
  debugger;
  setConfiguration({
    ...objGraphic,
  });
};
