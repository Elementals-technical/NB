const settingLogoThreekit = {
  add: {
    name: 'Add Logo',
    type: 'selectIMG',
  },
  upload: {
    name: 'Upload logo',
    type: 'upload',
  },
  color: {
    name: 'Color Logo',
    type: 'colorPicer',
  },
  size: {
    name: 'Size logo',
    type: 'inpurText',
  },
  rotate: {
    name: 'Rotate logo',
    type: 'inputRotate',
  },
  horizontal: {
    name: 'Horizontal logo',
    type: 'inpurTextNumber',
  },
  vertical: {
    name: 'Vertical logo',
    type: 'inpurTextNumber',
  },
};
const settingTextThreekit = {
  add: {
    name: 'Add Text',
    type: 'inputText',
  },
  font: {
    name: 'Font Text',
    type: 'select',
  },
  size: {
    name: 'Size text',
    type: 'inputText',
  },
  rotate: {
    name: 'Rotate Text',
    type: 'inputRotate',
  },
  shadow: {
    name: 'Text shadow',
    type: 'toggle',
    children: [
      {
        color: {
          name: 'color',
        },
        opacity: {
          name: 'opacity',
          type: 'inpurTextNumber',
        },
        Thickness: {
          name: 'Thickness',
          type: 'inpurTextNumber',
        },
        'Offset X': {
          name: 'Offset X',
          type: 'inpurTextNumber',
        },
        'Offset Y': {
          name: 'Offset Y',
          type: 'inpurTextNumber',
        },
      },
    ],
  },
  curve: {
    name: 'Text curve',
    type: 'toggle',
    children: [
      {
        Style: {
          name: 'Style',
          type: 'selected',
        },
        Amount: {
          name: 'Amount',
          type: 'inpurTextNumber',
        },
      },
    ],
  },
  bookend: {
    name: 'Text Bookend Effect',
    type: 'toggle',
    children: [
      {
        Size: {
          name: 'Size',
          type: 'inpurTextNumber',
        },
      },
    ],
  },
};
