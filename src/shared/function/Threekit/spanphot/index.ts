import { cloneDeep } from 'lodash';

export const listNameCamera = ['Front', 'Back', 'Right', 'Left'];

//@ts-ignore
export const getAttributeThreekit = (name: string): any => {
  //@ts-ignore
  const attribute = window['threekit']['configurator']
    .getDisplayAttributes()
    .filter((item: any) => item['name'] === name)[0];
  return attribute;
};

export const setThreeKitObj = (objThreeKit: any) => {
  if (Object.keys(objThreeKit).length > 0) {
    return window['threekit']['configurator'].setConfiguration(objThreeKit);
  }
  return Promise.resolve();
};

export type coordinates = 'x' | 'y' | 'z';
export type quaternionCoordinate = 'w' | 'x' | 'y' | 'z';
export type coordinatesObject = { [key in coordinates]: number };
export type coordinatesQuaternionCoordinate = {
  [key in quaternionCoordinate]: number;
};

export type coordinateCamera = coordinatesObject;

export const getPositionCamera = (): coordinateCamera =>
  window['threekit']['player']['camera'].getPosition();
export const setPositionCamera = (camTrans: coordinateCamera) =>
  window['threekit']['player']['camera'].setPosition(camTrans);
export const getPositionQuatCamera = (): coordinatesQuaternionCoordinate =>
  window['threekit']['player']['camera'].getQuaternion();
export const setPositionQuatCamera = (
  camQuat: coordinatesQuaternionCoordinate
) => window['threekit']['player']['camera'].setQuaternion(camQuat);

export const generationArraySnapshots = async (
  camerasNew: string[]
): Promise<any[]> => {
  // const cameras = ["2D", "Default", "CameraA", "CameraB", "CameraC", "CameraD"];
  const cameras = camerasNew;
  const base64Array: any[] = [];

  const configuratorActiveCamera = getAttributeThreekit('Camera');

  const currentPosition = getPositionCamera();
  const currentQuatCamera = getPositionQuatCamera();

  for await (const camera of cameras) {
    let size: any = { width: 1000, height: 1000 };
    let setObjectThreekit = {
      ExportSanphot: true,
      Camera: camera,
    };
    await setThreeKitObj(setObjectThreekit);

    const snapshotBase64 = await window['threekit']['player'].snapshotAsync({
      size: size,
    });

    base64Array.push({
      name: camera,
      base64: cloneDeep(snapshotBase64),
    });
  }

  await setThreeKitObj({
    Camera: configuratorActiveCamera?.value,
    ExportSanphot: false,
  });

  await setPositionCamera(currentPosition);
  await setPositionQuatCamera(currentQuatCamera);

  return base64Array;
};

export async function getSnaphots() {
  // start Loader
  const listSnapshot = await generationArraySnapshots(listNameCamera);
  // finish Loader

  return { listSnapshot };
}
