import { useConfigurator } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

export const ChangeProduc = () => {
  const { configID } = useParams();

  const [attributes, setConfiguration]: any = useConfigurator();

  useEffect(() => {
    console.log('attributes', attributes);
    if (attributes && Object.keys(attributes).length > 0) {
      const selectedProduct = attributes['Set object']['value'];
      const selectedProductDetail = attributes['Set object']['values'].find(
        (value: any) => value['assetId'] === selectedProduct['assetId']
      );

      if (selectedProductDetail['name'] !== configID) {
        const newSectedProduct = attributes['Set object']['values'].find(
          (value: any) => value['name'] === configID
        );
        setConfiguration({
          ['Set object']: { assetId: newSectedProduct['assetId'] },
        });
      }
    }
  }, [configID]);

  return <></>;
};
