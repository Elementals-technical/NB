import React from 'react';
import { RouterProvider, json } from 'react-router-dom';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { StartingScreen } from '../../../../page/StartingScreen/StartingScreen';
import { ConfiguraionScreen } from '../../../../page/ConfiguraionScreen/ConfiguraionScreen';
import { ColorGroup } from '../../../../wigetch/ColorGroup/ColorGroup';
import { PersonalizeGroup } from '../../../../wigetch/PersonalizeGroup/PersonalizeGroup';
import { PersonalizationSetting } from '../../../../wigetch/PersonalizationSetting/PersonalizationSetting';
import { PersonalizationObjectTextRuster } from '../../../../features/layer/PersonalizationObjectTextRuster/PersonalizationObjectTextRuster';
import { SettingsPersonaliztionCustomText } from '../../../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { PersonalizationObjectGraphics } from '../../../../features/layer/PersonalizationObjectGraphics/PersonalizationObjectGraphics';
import { PersonalizationObjectText } from '../../../../features/layer/PersonalizationObjectText/PersonalizationObjectText';
import { SettingsPersonaliztionRosterList } from '../../../../features/layer/SettingsPersonaliztionRosterList/SettingsPersonaliztionRosterList';
import { PreviewGroup } from '../../../../wigetch/PreviewGroup/PreviewGroup';
import { getSnaphots } from '../../Threekit/spanphot';
import { useDispatch } from 'react-redux';
import { setloadShowReviewPage } from '../redax/action';

export const URLS = {
  ROOT: '/',
  CONFIG_ID: ':configID',
  COLOR: 'color',
  PERSONALIZE: 'personalize',
  SETTINGS: 'settings',
  TEXT: 'text',
  CUSTOM: 'custom',
  PLAYER_NAME: 'player-name',
  PLAYER_NUMBER: 'player-number',
  GRAPHIC: 'graphic',
  REVIEW: 'review',
  roster_ID: ':rosterID',
  roster: 'roster-list',
};

export const URL_PAGE = {
  saveConfigPage: (configID: string) => `/${configID}`,
  personalizePage: (configID: string) => `/${configID}/${URLS.PERSONALIZE}`,
  personalizePageSetting: (configID: string) =>
    `/${configID}/${URLS.PERSONALIZE}/${URLS.SETTINGS}`,
};

export const AppRouter = () => {
  const dispatch = useDispatch();

  // createHashRouter
  // createBrowserRouter
  const router = createHashRouter([
    {
      path: URLS.ROOT,
      element: <StartingScreen />,
    },
    //@ts-ignore
    {
      path: URLS.CONFIG_ID,
      element: <ConfiguraionScreen />,
      children: [
        { index: true, element: <ColorGroup /> },
        {
          path: URLS.COLOR,
          element: <ColorGroup />,
        },
        {
          path: URLS.PERSONALIZE,
          children: [
            { index: true, element: <PersonalizeGroup /> },
            {
              path: URLS.SETTINGS,
              element: <PersonalizationSetting />,
              children: [
                {
                  path: URLS.TEXT,
                  element: <PersonalizationObjectText />,
                  children: [
                    {
                      index: true,
                      element: <SettingsPersonaliztionCustomText />,
                    },
                    {
                      path: URLS.CUSTOM,
                      element: <SettingsPersonaliztionCustomText />,
                    },
                    {
                      path: URLS.PLAYER_NAME,
                      element: <PersonalizationObjectTextRuster />,
                    },
                    {
                      path: URLS.PLAYER_NUMBER,
                      element: <PersonalizationObjectTextRuster />,
                    },
                  ],
                },
                {
                  path: URLS.GRAPHIC,
                  element: <PersonalizationObjectGraphics />,
                },
              ],
            },
            {
              path: URLS.roster_ID,
              element: <SettingsPersonaliztionRosterList />,
            },
          ],
        },
        {
          path: URLS.REVIEW,
          element: <PreviewGroup />,
          loader: async () => {
            try {
              await dispatch(setloadShowReviewPage(true));

              const listSnapshot = await getSnaphots();

              await dispatch(setloadShowReviewPage(false));

              return listSnapshot;
            } catch (e: any) {
              throw json(
                { message: 'Error occured while fetching data' },
                { status: e.status }
              );
            }
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
