import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getSavedConfiguration } from '../../shared/function/Threekit/saveConfig';
import { restoreConfig } from '../../shared/function/providers/redax/action';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { ResoreConfigStore } from './ResoreConfigStore';

const threekitUrl = 'https://preview.threekit.com/';
const publicToken = '2e113be6-bbfb-48c6-998a-7efa10593f29';

const CONFIGURATIONS_API_ROUTE = `api/configurations`;

export const ResoreConfig = () => {
  const [attributes, setConfiguration]: any = useConfigurator();

  if (!attributes) return <></>;

  //   return <></>;
  return <ResoreConfigStore />;
};
