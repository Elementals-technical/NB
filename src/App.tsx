import { ThreekitProvider } from '@threekit-tools/treble';
import { StartingScreen } from './page/StartingScreen/StartingScreen';
import './shared/fonts.css';
import { ConfiguraionScreen } from './page/ConfiguraionScreen/ConfiguraionScreen';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import { ColorGroup } from './wigetch/ColorGroup/ColorGroup';
import { PersonalizeGroup } from './wigetch/PersonalizeGroup/PersonalizeGroup';
import { PersonalizationSetting } from './wigetch/PersonalizationSetting/PersonalizationSetting';
import { PersonalizationObjectText } from './features/layer/PersonalizationObjectText/PersonalizationObjectText';
import { SettingsPersonaliztionText } from './shared/UI/Control/SettingsPersonaliztionText.tsx/SettingsPersonaliztionText';
import { SettingsPersonaliztionCustomText } from './features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { PersonalizationObjectGraphics } from './features/layer/PersonalizationObjectGraphics/PersonalizationObjectGraphics';
import { SettingsPersonaliztionRosterList } from './features/layer/SettingsPersonaliztionRosterList/SettingsPersonaliztionRosterList';

// createHashRouter
// createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <StartingScreen />,
  },
  //@ts-ignore
  {
    path: ':configID',
    element: <ConfiguraionScreen />,
    children: [
      { index: true, element: <ColorGroup /> },
      {
        path: 'color',
        element: <ColorGroup />,
      },
      {
        path: 'personalize',
        children: [
          { index: true, element: <PersonalizeGroup /> },
          {
            path: 'settings',
            element: <PersonalizationSetting />,
            children: [
              {
                path: 'text',
                element: <PersonalizationObjectText />,
                children: [
                  {
                    index: true,
                    element: <SettingsPersonaliztionText />,
                  },
                  {
                    path: 'custom',
                    element: <SettingsPersonaliztionCustomText />,
                  },
                  {
                    path: 'player-name',
                    element: <SettingsPersonaliztionText />,
                  },
                  {
                    path: 'player-number',
                    element: <SettingsPersonaliztionText />,
                  },
                ],
              },
              {
                path: 'graphic',
                element: <PersonalizationObjectGraphics />,
              },
            ],
          },
          {
            path: 'roster-list',
            element: <SettingsPersonaliztionRosterList />,
          },
        ],
      },
      {
        path: 'review',
        element: <>e</>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
