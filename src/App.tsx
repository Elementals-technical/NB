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

export const saveConfig = {
  '3d': {
    short: '5rabMva22',
    jersey: 'y02VQRz0y',
    w_hoodie: '5rabMva22',
    w_pant: '5rabMva22',
  },
};

const projects = {
  credentials: {
    preview: {
      publicToken: 'a5cde04b-734f-4983-bb1d-33b575a42020',
      orgId: '62e2af29-9c24-48f3-ad7b-ddac67694a2a',
    },
  },
  products: {
    preview: {
      configurationId: '5rabMva22',
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
      <ThreekitProvider
        project={projects}
        threekitEnv={threekitEnv}
        playerConfig={playerConfig}
      >
        <RouterProvider router={router} />
      </ThreekitProvider>
    </>
  );
};

export default App;
