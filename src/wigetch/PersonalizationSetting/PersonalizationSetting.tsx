import React from 'react';
import { UploadFile } from '../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
import s from './PersonalizationSetting.module.scss';
import { Outlet, useNavigate } from 'react-router';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { BackIcon } from '../../shared/assets/svg/BackIcon';
import { LineParam } from '../../shared/UI/LineParam/LineParam';
import { AITextIcon } from '../../shared/assets/svg/AITextIcon';
import { GraphicIcon } from '../../shared/assets/svg/GraphicIcon';
import { PersonalizationTypeAria } from '../../shared/UI/Control/PersonalizationTypeAria/PersonalizationTypeAria';
export const PersonalizationSetting = () => {
  const navigate = useNavigate();

  async function uploadFile(file: any) {
    const fileName = file.name;
    const formData = new FormData();
    formData.append('files', file, fileName);

    const requestOptions = {
      method: 'POST',
      data: formData,
      url: 'http://localhost:3001/api/loadFile', // Replace with your actual API endpoint
    };

    return await axios(requestOptions);
  }

  function extractAssetId(response: any) {
    return response.data.result.output.texture[0].assetId;
  }

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
        <PersonalizationTypeAria />

        <Outlet />
        {/* <UploadFile
          updateFilesCb={async (files: any) => {
            const formFile = files[0];

            if (!formFile) {
              console.error('No file selected.');
              return;
            }

            const response = await uploadFile(formFile);
            const assetId = extractAssetId(response);

            window.threekit.configurator.setConfiguration({
              ['Add Logo 1']: {
                assetId: assetId,
              },
            });
            window.threekit.configurator.setConfiguration({
              ['Add Logo 2']: {
                assetId: assetId,
              },
            });
          }}
        /> */}
      </div>
      <footer>
        <div className="reset"></div>
        <div className="wrap_box">
          <button>Cancel</button>
          <button>Save Personalization</button>
        </div>
      </footer>
    </div>
  );
};
