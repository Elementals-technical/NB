import s from './UploadLogo.module.scss';
import { LoadingCustomLogo } from '../../../../wigetch/LoadingCustomLogo/LoadingCustomLogo';
import axios from 'axios';
import { OrIcon } from '../../../assets/svg/OrIcon';
import { LoadingDefaultLogo } from '../../../../wigetch/LoadingDefaultLogo/LoadingDefaultLogo';

export const UploadLogo = ({ zoneText }: any) => {
  async function uploadFile(file: any) {
    const fileName = file.name;
    const formData = new FormData();
    formData.append('files', file, fileName);

    const requestOptions = {
      method: 'POST',
      data: formData,
      url: '/api/loadFile', // Replace with your actual API endpoint
    };

    return await axios(requestOptions);
  }

  function extractAssetId(response: any) {
    console.log('response', response);

    return response.data.result.output.texture[0].assetId;
  }

  return (
    <>
      <div className={s.customLogo}>
        <LoadingCustomLogo
          updateFilesCb={async (files: any) => {
            const formFile = files[0];

            if (!formFile) {
              console.error('No file selected.');
              return;
            }

            const response = await uploadFile(formFile);
            const assetId = extractAssetId(response);

            window.threekit.configurator.setConfiguration({
              [`Upload logo ${zoneText}`]: {
                assetId: assetId,
              },
            });
          }}
        />
      </div>
      <div className={s.box}>
        <div className={s.iconOr}>
          <OrIcon />
        </div>
      </div>
      <div className={s.box}>
        <LoadingDefaultLogo zoneLogo={zoneText} />
      </div>
    </>
  );
};
