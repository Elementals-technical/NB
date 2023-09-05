import React from 'react';
import { RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';
import { StartingScreen } from '../../../page/StartingScreen/StartingScreen';
import { ConfiguraionScreen } from '../../../page/ConfiguraionScreen/ConfiguraionScreen';
import { ColorGroup } from '../../../wigetch/ColorGroup/ColorGroup';
import { PersonalizeGroup } from '../../../wigetch/PersonalizeGroup/PersonalizeGroup';
import { PersonalizationSetting } from '../../../wigetch/PersonalizationSetting/PersonalizationSetting';
import { PersonalizationObjectText } from '../../../features/layer/PersonalizationObjectText/PersonalizationObjectText';
import { SettingsPersonaliztionText } from '../../UI/Control/SettingsPersonaliztionText.tsx/SettingsPersonaliztionText';
import { SettingsPersonaliztionCustomText } from '../../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { PersonalizationObjectGraphics } from '../../../features/layer/PersonalizationObjectGraphics/PersonalizationObjectGraphics';

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
};

export const URL_PAGE = {
  personalizePage: (configID: string) => `/${configID}/${URLS.PERSONALIZE}`,
};

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
                    element: <SettingsPersonaliztionText />,
                  },
                  {
                    path: URLS.CUSTOM,
                    element: <SettingsPersonaliztionCustomText />,
                  },
                  {
                    path: URLS.PLAYER_NAME,
                    element: <SettingsPersonaliztionText />,
                  },
                  {
                    path: URLS.PLAYER_NUMBER,
                    element: <SettingsPersonaliztionText />,
                  },
                ],
              },
              {
                path: URLS.GRAPHIC,
                element: <PersonalizationObjectGraphics />,
              },
            ],
          },
        ],
      },
      {
        path: URLS.REVIEW,
        element: <>e</>,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
