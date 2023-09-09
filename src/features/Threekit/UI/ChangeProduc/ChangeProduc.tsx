import { useConfigurator } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { seLoadChangeObkect } from '../../../../shared/function/providers/redax/action';

export const ChangeProduc = () => {
  const { configID } = useParams();
  const dispatch = useDispatch();

  const [attributes, setConfiguration]: any = useConfigurator();

  useEffect(() => {
    const changeProduct = async (attributes: any) => {
      if (attributes && Object.keys(attributes).length > 0) {
        const selectedProduct = attributes['Set object']['value'];
        const selectedProductDetail = attributes['Set object']['values'].find(
          (value: any) => value['assetId'] === selectedProduct['assetId']
        );

        if (selectedProductDetail['name'] !== configID) {
          await dispatch(seLoadChangeObkect(true));
          const newSectedProduct = attributes['Set object']['values'].find(
            (value: any) => value['name'] === configID
          );
          await setConfiguration({
            ['Set object']: { assetId: newSectedProduct['assetId'] },
          });
          //@ts-ignore
          await window.threekit.player.evaluate();
          await dispatch(seLoadChangeObkect(false));
        }
      }
    };
    changeProduct(attributes);
  }, [configID]);

  return <></>;
};
