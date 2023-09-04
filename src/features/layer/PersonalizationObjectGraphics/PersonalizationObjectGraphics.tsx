import s from './PersonalizationObjectGraphics.module.scss';
import { UploadFile } from '../../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
import Select from 'react-select/dist/declarations/src/Select';

export const PersonalizationObjectGraphics = () => {
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
            ['Upload logo back 1']: {
              assetId: assetId,
            },
          });
          window.threekit.configurator.setConfiguration({
            ['Upload logo back 2']: {
              assetId: assetId,
            },
          });
        }}
      />
      {/* <div className={s.wrap}>
        <div className={s.header}>
          <div className={s.title}>Text location</div>
        </div>
        <div className={s.main}>
          <Select
            options={options}
            onChange={(value) => {
              selectedZoneText(value);
            }}
          />
        </div>
      </div> */}
    </>
  );
};
