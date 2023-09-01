import { ThreekitProvider } from '@threekit-tools/treble';
import { StartingScreen } from './page/StartingScreen/StartingScreen';
import './shared/fonts.css';
import { ConfiguraionScreen } from './page/ConfiguraionScreen/ConfiguraionScreen';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    // preview: { assetId: '2da29661-6bbe-4a44-8d6d-b6ef30e06d8a' },
    // preview: { assetId: '5rabMva22' },
  },
};

const threekitEnv: string = 'preview';
const playerConfig: any = {
  allowMobileVerticalOrbit: true,
  // onAnnotationChange: (annotations: any, parentEl: any) => {
  //   // onAnnotationChange(navigate)(annotations, parentEl);
  // },
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartingScreen />,
  },
  {
    path: ':configID',
    element: <ConfiguraionScreen />,
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
