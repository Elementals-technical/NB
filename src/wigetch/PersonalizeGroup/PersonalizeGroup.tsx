import React from 'react';
import s from './PersonalizeGroup.module.scss';
import { PersonalizeScreenStart } from '../../shared/UI/PersonalizeScreenStart/PersonalizeScreenStart';
import { UploadFile } from '../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
export const PersonalizeGroup = () => {
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
    <div className={s.group}>
      <PersonalizeScreenStart />

      <div className="">
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
        />
      </div>
    </div>
  );
};
