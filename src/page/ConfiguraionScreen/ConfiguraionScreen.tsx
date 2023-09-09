import React, { useEffect } from 'react';
import s from './ConfiguraionScreen.module.scss';
import { View } from '../../wigetch/View/View';
import { Configuration } from '../../wigetch/Configuration/Configuration';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { ThreekitProvider } from '@threekit-tools/treble/dist';
import { useParams } from 'react-router';
import { ChangeProduc } from '../../features/Threekit/UI/ChangeProduc/ChangeProduc';
import axios from 'axios';

const threekitUrl = 'https://preview.threekit.com/';
const publicToken = '2e113be6-bbfb-48c6-998a-7efa10593f29';

const CONFIGURATIONS_API_ROUTE = `api/configurations`;

export const getSavedConfiguration = async ({ ...props }) => {
  const { configurationId, authToken, threekitUrl } = props;

  let error;
  if (!configurationId) error = 'Requires Configuration ID';
  if (error) return [undefined, { message: error }];

  let response = await axios
    .get(
      `${threekitUrl}${CONFIGURATIONS_API_ROUTE}/${configurationId}?bearer_token=${authToken}`
    )
    .then((response) => response);

  return response['data'];
};

export const ConfiguraionScreen = () => {
  const { configID } = useParams();
  useEffect(() => {
    getSavedConfiguration({
      configurationId: 'RzIJ3mbvh',
      authToken: publicToken,
      threekitUrl: threekitUrl,
    });
  }, []);
  if (!configID) return <></>;
  const saveConfig: Record<string, string> = {
    Shorts: 'rL7-gjOig',
    Jersey: 'n0nAvYnGH',
    Hoodie: 'JOksyDpjv',
    Pants: 'tjic2RroK',
  };

  const projects = {
    credentials: {
      preview: {
        publicToken: '2e113be6-bbfb-48c6-998a-7efa10593f29',
        orgId: '62e2af29-9c24-48f3-ad7b-ddac67694a2a',
      },
    },
    products: {
      preview: {
        configurationId: saveConfig[configID],
      },
    },
  };

  const threekitEnv: string = 'preview';
  const playerConfig: any = {
    allowMobileVerticalOrbit: true,
    // onAnnotationChange: (annotations: any, parentEl: any) => {
    //   // onAnnotationChange(navigate)(annotations, parentEl);
    // },
  };

  return (
    <>
      <ThreekitProvider
        project={projects}
        threekitEnv={threekitEnv}
        playerConfig={playerConfig}
      >
        <LoaderPage />
        <ChangeProduc />
        <div className={s.page}>
          <div className={s.view}>
            <View />
          </div>
          <div className={s.wrap_configurator}>
            <Configuration />
          </div>
        </div>
      </ThreekitProvider>
    </>
  );
};
