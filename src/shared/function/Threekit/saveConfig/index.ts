import axios from 'axios';

const CONFIGURATIONS_API_ROUTE = `api/configurations`;
// function dataURItoBlob(dataURI: string) {
//   var byteString = atob(dataURI.split(',')[1]);

//   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

//   var ab = new ArrayBuffer(byteString.length);

//   var ia = new Uint8Array(ab);

//   for (var i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }

//   var blob = new Blob([ab], { type: mimeString });
//   return blob;
// }
//@ts-ignore
// export function generateSnapshot(size: any): any {
//   //@ts-ignore
//   const base64_small = window.threekit.player.snapshotAsync();
//   return base64_small;
// }

// export const SavedConfiguration = async ({ ...props }) => {
//   const { metadata, authToken, orgId, threekitUrl } = props;
//   let message;
//   if (!window.threekit.player.assetId) message = 'Requires Asset Id';
//   //@ts-ignore
//   if (!window.threekit.configurator.getFullConfiguration())
//     message = 'Requires a configuration';
//    if (message) return [undefined, { message }];

//   const base64_small = await window.threekit.player.snapshotAsync({
//     size: { width: 1500, height: 1500 },
//   });

//   const blob_small = await dataURItoBlob(base64_small);

//   const file_small = await new File([blob_small], 'snapshot.png');

//   let saveConfig = window.threekit.configurator.getFullConfiguration();
//   saveConfig['Configurator View'] = '3D';
//   saveConfig['typeViewToExport'] = false;
//   saveConfig['Show Lines'] = false;

//   const fd = await new FormData();
//   await fd.append('files', file_small);
//   await fd.append('productId', window.threekit.player.assetId);
//   await fd.append('productVersion', 'v1');
//   await fd.append('orgId', orgId);
//   await fd.append('variant', JSON.stringify(saveConfig));
//   if (metadata && Object.keys(metadata))
//     await fd.append('metadata', JSON.stringify(metadata));

//   let response = await fetch(
//     `${threekitUrl}${CONFIGURATIONS_API_ROUTE}?bearer_token=${authToken}`,
//     {
//       method: 'post',
//       body: fd,
//     }
//   );

//   let jsonRes = await response.json();
//   let shortId = await jsonRes.shortId;

//   return shortId;
// };

// export const SavedConfigurationOther = async ({ ...props }) => {
//   const { metadata, authToken, orgId, threekitUrl } = props;
//   let message;
//   if (!window.threekit.player.assetId) message = 'Requires Asset Id';
//   if (!window.threekit.configurator.getFullConfiguration())
//     message = 'Requires a configuration';
//   if (!document.getElementById('player')) message = 'Not canvas configuration';
//   if (message) return [undefined, { message }];

//   const base64_small = await window.threekit.player.snapshotAsync({
//     size: { width: 1500, height: 1500 },
//   });

//   const blob_small = await dataURItoBlob(base64_small);

//   const file_small = await new File([blob_small], 'snapshot.png');

//   const fd = await new FormData();
//   await fd.append('files', file_small);
//   await fd.append('productId', window.threekit.player.assetId);
//   await fd.append('productVersion', 'v1');
//   await fd.append('orgId', orgId);
//   await fd.append(
//     'variant',
//     JSON.stringify(window.playerT.configurator.getFullConfiguration())
//   );
//   if (metadata && Object.keys(metadata))
//     await fd.append('metadata', JSON.stringify(metadata));

//   let response = await fetch(
//     `${threekitUrl}${CONFIGURATIONS_API_ROUTE}?bearer_token=${authToken}`,
//     {
//       method: 'post',
//       body: fd,
//     }
//   );

//   let jsonRes = await response.json();
//   let shortId: returnObjectThreekit = await jsonRes.shortId;

//   return shortId;
// };

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
