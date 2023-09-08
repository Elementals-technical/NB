import s from './UploadLogo.module.scss';
import { UploadFile } from '../../UploadFile/UploadFile';
import axios from 'axios';
import { IconPlus } from '../../../assets/svg/IconPlus';
import { OrIcon } from '../../../assets/svg/OrIcon';
import { ViewLoadImg } from '../../BaseComponent/ViewLoadImg/ViewLoadImg';

import bearIcon from './../../../../shared/assets/images/defaultLogo/bear.png';

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
    <div>
      <div className={s.customLogo}>
        <UploadFile
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
      <div className={`${s.box} `}>
        <button className={s.btn_default}>
          <span>
            <IconPlus />
          </span>
          Add default graphics
        </button>
      </div>

      <div className={s.box}>
        <ViewLoadImg
          name={'test'}
          typeLoad={'Default graphic'}
          removeFile={() => {}}
          content={<>{/* <img src=""></img> */}</>}
        />
      </div>
    </div>
  );
};
