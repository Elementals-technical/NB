const listColor: any = [
  {
    label: 'White',
    value: 'White',
    hex: '#FFFFFF',
  },
  {
    label: 'Black',
    value: 'Black',
    hex: '#161516',
  },
  {
    label: 'Brown',
    value: 'Brown',
    hex: '#623B2C',
  },
  {
    label: 'Cardinal',
    value: 'Cardinal',
    hex: '#6F2D40',
  },
  {
    label: 'Charcoal',
    value: 'Charcoal',
    hex: '#5F6169',
  },
  {
    label: 'Blue',
    value: 'Blue',
    hex: '#89C7EC',
  },
  {
    label: 'Forest Green',
    value: 'Forest Green',
    hex: '#385644',
  },
  {
    label: 'Gold',
    value: 'Gold',
    hex: '#F9B73E',
  },
  {
    label: 'Grey',
    value: 'Grey',
    hex: '#8A8E8C',
  },
  {
    label: 'Maroon',
    value: 'Maroon',
    hex: '#7D2955',
  },
  {
    label: 'Orange',
    value: 'Orange',
    hex: '#E85328',
  },
  {
    label: 'Red',
    value: 'Red',
    hex: '#E30D31',
  },
  {
    label: 'Deep Purple',
    value: 'Deep Purple',
    hex: '#2B2A65',
  },
  {
    label: 'Turuoise',
    value: 'Turuoise',
    hex: '#17B1B8',
  },
];

export const SectionBase: any = {
  short: [
    {
      type: 'ListColor',
      data: {
        label: 'Short color',
        nameThreekit: 'Color',
        id: 'Color',
        typeOptions: 'configurationOptions',
        values: [
          {
            label: 'White',
            value: 'White',
            hex: '#FFFFFF',
          },
        ],
      },
    },
  ],
  jersey: [
    {
      type: 'TabContainer',
      data: {
        headerComponent: {
          type: 'LineParam',
          data: {
            label: 'Color application area',
            id: 'Area',
            typeOptions: 'configurationOptions',
            values: [
              {
                label: 'Front',
                value: 'front',
              },
              {
                label: 'Back',
                value: 'back',
              },
              {
                label: 'Sleeves',
                value: 'sleeves',
              },
              {
                label: 'Buttons',
                value: 'buttons',
              },
            ],
          },
        },
        sectionsComponent: [
          {
            type: 'ListColor',
            data: {
              label: 'Jersey color',
              id: 'BaseColor#front#',
              typeOptions: 'configurationOptions',
              values: listColor,
            },
          },
          {
            type: 'ListColor',
            data: {
              label: 'Jersey color',
              id: 'BaseColor#back#',
              typeOptions: 'configurationOptions',
              values: listColor,
            },
          },
          {
            type: 'ListColor',
            data: {
              label: 'Jersey color',
              id: 'BaseColor#sleeves#',
              typeOptions: 'configurationOptions',
              values: listColor,
            },
          },
          {
            type: 'ListColor',
            data: {
              label: 'Jersey color',
              id: 'BaseColor#buttons#',
              typeOptions: 'configurationOptions',
              values: listColor,
            },
          },
        ],
      },
    },
  ],
};

const sectionPersonalize = [
  {
    type: 'startComponent',
    data: {
      label: 'Personalize product',
      description:
        'Right now you don’t have any personalization. Customize your product with graphics, team names and player names!',
      id: 'Area',
      typeOptions: 'configurationOptions',
      values: listColor,
    },
  },
  {
    type: 'LineParam',
    data: {
      label: 'Personalization type',
      id: 'Area',
      typeOptions: 'configurationOptions',
      values: [
        {
          label: 'Text',
          value: 'front',
        },
        {
          label: 'Text',
          value: 'back',
        },
      ],
    },
  },
  {
    type: 'LineParam',
    data: {
      label: 'Object type',
      id: 'Area',
      typeOptions: 'configurationOptions',
      values: [
        {
          label: 'Custom Text',
          value: 'front',
        },
        {
          label: 'Player Name',
          value: 'back',
        },
        {
          label: 'Player Number',
          value: 'back',
        },
      ],
    },
  },
];

export const Section = {
  base: SectionBase,
  personalize: {},
  review: {},
};
