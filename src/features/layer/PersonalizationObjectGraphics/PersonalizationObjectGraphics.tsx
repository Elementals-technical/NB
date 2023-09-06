import s from './PersonalizationObjectGraphics.module.scss';
import { UploadFile } from '../../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
import Select from 'react-select/dist/declarations/src/Select';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getVisibleLayers } from '../../../shared/function/providers/redax/selectore';

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

  let { configID } = useParams();

  const visibleLayers = useSelector(
    getVisibleLayers({ objectId: configID, typeZone: 'text' })
  );
  const layer = visibleLayers.find((layer) => layer['isShow']);

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
      <div className={s.wrap}>
        <div className={s.line}>
          <div className={s.boxFont}>
            <Select
              title={'Select font'}
              options={optionsFonts}
              value={getValueThreekitFunc('Font Text ')}
              onChange={(value) => {
                const valueObj = optionsFonts.find((i) => i['value'] === value);
                selectedFoneText(valueObj);
              }}
            />
          </div>

          <div className={s.boxheight}>
            <Counter
              title="Select height"
              value={getValueThreekitFunc('Size text ')}
              onChange={(value) => {
                console.log('value n', value);
                selectedFoneSizeText(value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
