import s from './UploadLogo.module.scss';
import { LoadingCustomLogo } from '../../../../wigetch/LoadingCustomLogo/LoadingCustomLogo';
import axios from 'axios';
import { OrIcon } from '../../../assets/svg/OrIcon';
import { LoadingDefaultLogo } from '../../../../wigetch/LoadingDefaultLogo/LoadingDefaultLogo';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useDispatch } from 'react-redux';
import {
  seLoadCustomImg,
  setCurentLayer,
  setThreekitAttribute,
} from '../../../function/providers/redax/action';

import { Upload } from '@threekit-tools/treble';
import { fileToBase64 } from '../../../function/Files';

export const UploadLogo = ({ zoneLogo }: any) => {
  const [attributes, setConfiguration]: any = useConfigurator();
  const dispatch = useDispatch();
  const removeThreekit = async () => {
    dispatch(setThreekitAttribute(true));
    dispatch(
      setCurentLayer({
        type: 'upload-graphic',
      })
    );

    const nameAttr = `Upload logo ${zoneLogo}`;
    await setConfiguration({ [nameAttr]: { assetId: '' } });
    //@ts-ignore
    await window.threekit.player.evaluate();
    await dispatch(setThreekitAttribute(false));
  };

  const isLoadCustomLogog =
    attributes[`Upload logo ${zoneLogo}`] &&
    attributes[`Upload logo ${zoneLogo}`]['value'] &&
    attributes[`Upload logo ${zoneLogo}`]['value']['assetId'] !== '' &&
    attributes[`Upload logo ${zoneLogo}`]['value']['assetId'] !== undefined;
  const isLoadDefaultLogog =
    attributes[`Add Logo ${zoneLogo}`] &&
    attributes[`Add Logo ${zoneLogo}`]['value'] &&
    attributes[`Add Logo ${zoneLogo}`]['value']['assetId'] !== '' &&
    attributes[`Add Logo ${zoneLogo}`]['value']['assetId'] !== undefined;

  if (!zoneLogo) return <></>;
  return (
    <>
      {!isLoadDefaultLogog && (
        <div className={s.customLogo}>
          <LoadingCustomLogo
            removeThreekit={removeThreekit}
            updateFilesCb={async (files: any) => {
              const formFile = files[0];

              if (!formFile) {
                console.error('No file selected.');
                return;
              }

              const assetId =
                //@ts-ignore
                await window.threekit.player.uploadImage(formFile);
              await setConfiguration({
                [`Upload logo ${zoneLogo}`]: {
                  assetId: assetId,
                },
              });
              //@ts-ignore
              if (window.loadFile) {
                //@ts-ignore
                window.loadFile = {
                  //@ts-ignore
                  ...window.loadFile,
                  [`Upload logo ${zoneLogo}`]: await fileToBase64(files[0]),
                };
              } else {
                //@ts-ignore
                window.loadFile = {
                  [`Upload logo ${zoneLogo}`]: await fileToBase64(files[0]),
                };
              }

              //@ts-ignore
              await window.threekit.player.evaluate();
              await dispatch(setThreekitAttribute(false));
              await dispatch(seLoadCustomImg(false));
            }}
          />
        </div>
      )}
      {!isLoadCustomLogog && !isLoadDefaultLogog && (
        <div className={s.box}>
          <div className={s.iconOr}>
            <OrIcon />
          </div>
        </div>
      )}
      {!isLoadCustomLogog && (
        <div className={s.box}>
          <LoadingDefaultLogo zoneLogo={zoneLogo} />
        </div>
      )}
    </>
  );
};
