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

// createHashRouter
// createBrowserRouter
const router = createHashRouter([
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
