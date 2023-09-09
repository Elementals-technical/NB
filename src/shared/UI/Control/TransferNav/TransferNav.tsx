import s from './TransferNav.module.scss';
import { BtnNavigate } from '../../BtnNavigate/BtnNavigate';
import { TransferIcon } from '../../../assets/svg/TransferIcon';
import { useNavigate, useParams } from 'react-router';
import {
  areasObject,
  getAreasByKey,
  getAreasByType,
} from '../../../data/areasObjects';
import { ProductInfo } from '../../../data/productInformation';
import { defaultObjLogo } from '../../../../features/layer/PersonalizationObjectGraphics/PersonalizationObjectGraphics';
import {
  defaultObjText,
  replaceKeywordInObject,
} from '../../../../features/layer/PersonalizationObjectTextRuster/PersonalizationObjectTextRuster';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useDispatch } from 'react-redux';
import {
  createAreaObject,
  seLoadChangeObkect,
} from '../../../function/providers/redax/action';

function getDifference(prewObjectGraphic: any, nextObjectGraphic: any) {
  const nextObjectMap = new Map(
    nextObjectGraphic.map((obj: any) => [obj.nameThreekit, obj])
  );

  return prewObjectGraphic.filter(
    (obj: any) => !nextObjectMap.has(obj.nameThreekit)
  );
}

export const TransferNav = () => {
  const { configID } = useParams();
  const [attributes, setConfiguration]: any = useConfigurator();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  if (!attributes) return <></>;
  if (Object.keys(attributes).length < 1) return <></>;
  if (!configID) return <></>;

  //   areasObject

  const variant = [
    ['Pants', 'Shorts'],
    ['Hoodie', 'Jersey'],
  ];

  let variantSelected = variant.find((arry) => arry.includes(configID));
  if (!variantSelected) return <></>;

  const jerseyIndex = variantSelected.indexOf(configID);

  if (jerseyIndex !== -1) {
    variantSelected.splice(jerseyIndex, 1);
  }

  const transformItem = variantSelected[0];

  const prewObjectGraphic = getAreasByType('graphic', configID);
  const prewObjectText = getAreasByType('text', configID);

  const nextObjectGraphic = getAreasByType('graphic', transformItem);
  const nextObjectText = getAreasByType('text', transformItem);

  const resultGraphic = getDifference(prewObjectGraphic, nextObjectGraphic);
  const resultText = getDifference(prewObjectText, nextObjectText);

  let restGraph = {};
  let restText = {};

  resultGraphic.forEach((grapic: any) => {
    let objGrap = replaceKeywordInObject(
      defaultObjLogo,
      'back 2',
      grapic['nameThreekit']
    );
    restGraph = {
      ...restGraph,
      ...objGrap,
    };
  });

  resultText.forEach((grapic: any) => {
    let objText = replaceKeywordInObject(
      defaultObjText,
      'back 2',
      grapic['nameThreekit']
    );
    restText = {
      ...restText,
      ...objText,
    };
  });

  console.log('attributes', attributes);

  const newSectedProduct = attributes['Set object']['values'].find(
    (value: any) => value['name'] === transformItem
  );

  return (
    <BtnNavigate
      svg={<TransferIcon />}
      clickHandler={async () => {
        const listIconPosition = resultGraphic.map((icon: any) => {
          return icon['nameThreekit'];
        });
        const listTextPosition = resultText.map((icon: any) => {
          return icon['nameThreekit'];
        });

        await dispatch(
          createAreaObject({ type: 'graphic', listPointAria: listIconPosition })
        );
        await dispatch(
          createAreaObject({ type: 'text', listPointAria: listTextPosition })
        );

        await dispatch(seLoadChangeObkect(true));

        setConfiguration({
          ['Set object']: { assetId: newSectedProduct['assetId'] },
          ...restGraph,
          ...restText,
        });
        //@ts-ignore
        await window.threekit.player.evaluate();
        await dispatch(seLoadChangeObkect(false));
        navigate(`/${transformItem}`);
      }}
      name={
        <>
          Transfer design to
          <strong>{ProductInfo[transformItem]['name']}</strong>
        </>
      }
    />
  );
};
