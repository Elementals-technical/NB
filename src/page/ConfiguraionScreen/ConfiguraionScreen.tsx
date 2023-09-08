import React, { useEffect } from 'react';
import s from './ConfiguraionScreen.module.scss';
import { View } from '../../wigetch/View/View';
import { Configuration } from '../../wigetch/Configuration/Configuration';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { ThreekitProvider } from '@threekit-tools/treble/dist';
import { useParams } from 'react-router';
export const ConfiguraionScreen = () => {
  const { configID } = useParams();
  if (!configID) return <></>;
  const saveConfig: Record<string, string> = {
    short: 'rL7-gjOig',
    jersey: 'n0nAvYnGH',
    w_hoodie: 'JOksyDpjv',
    w_pant: 'tjic2RroK',
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

  useEffect(() => {
    console.log('test2');
  }, [configID]);
  useEffect(() => {
    console.log('test1');
  }, []);

  return (
    <>
      <ThreekitProvider
        project={projects}
        threekitEnv={threekitEnv}
        playerConfig={playerConfig}
      >
        {/* <LoaderPage /> */}

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
