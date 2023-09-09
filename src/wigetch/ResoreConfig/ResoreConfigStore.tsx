import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { restoreConfig } from '../../shared/function/providers/redax/action';
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

export const ResoreConfigStore = () => {
  const [searchParams] = useSearchParams();
  const tkid = searchParams.get('tkid');

  const dispatch = useDispatch();

  useEffect(() => {
    if (tkid) {
      getSavedConfiguration({
        configurationId: tkid,
        authToken: publicToken,
        threekitUrl: threekitUrl,
      }).then((result) => {
        setTimeout(() => {
          if (result['metadata']['dataStore']) {
            dispatch(restoreConfig(result['metadata']['dataStore']));
          }
          if (result['metadata']['file']) {
            //@ts-ignore
            window.loadFile = result['metadata']['file'];
          }
        }, 3000);
      });
    }
  }, []);
  return <></>;
};
