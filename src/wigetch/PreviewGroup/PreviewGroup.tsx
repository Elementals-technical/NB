import React from 'react';
import s from './PreviewGroup.module.scss';
import { PersonalizeScreenStart } from '../../shared/UI/PersonalizeScreenStart/PersonalizeScreenStart';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectedLayers } from '../../shared/function/providers/redax/selectore';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { ColorPreviewList } from './components/ColorPreviewList/ColorPreviewList';
import { TablePreview } from './components/TablePreview/TablePreview';
import { CustomText } from './utils/assets/CustomText';
import playerName from './utils/assets/name.png';
import playerGraphics from './utils/assets/graphics.png';
import playerNumber from './utils/assets/number.png';
import { PlayerPerspective } from './components/PlayerPerspective/PlayerPerspective';
const colorData = [
  {
    title: 'Front Color',
    colorName: 'Orange',
    colorTag: '#E85328',
  },
  {
    title: 'Back Color',
    colorName: 'Black',
    colorTag: '#161516',
  },
  {
    title: 'Sleeves Color',
    colorName: 'Turuoise',
    colorTag: '#17B1B8',
  },
  {
    title: 'Button Color',
    colorName: 'Purple',
    colorTag: '#2B2A65',
  },
];

export const PreviewGroup = () => {
  const selectedLayers = useSelector(getSelectedLayers);
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <PlayerPerspective />
      <header>
        <div className={s.title}>Customization review</div>
      </header>
      <main>
        <ColorPreviewList colorData={colorData} />
        <div className={s.tableContent}>
          <TablePreview img={<CustomText />} title="Custom text" />
          <TablePreview
            img={<img src={playerName} alt="" />}
            title="Player name"
          />
          <TablePreview
            img={<img src={playerNumber} alt="" />}
            title="Player number"
          />
          <TablePreview
            img={<img src={playerGraphics} alt="" />}
            title="Graphics"
          />
        </div>
      </main>

      <footer>
        <div className={s.cancel} onClick={() => navigate(-1)}>
          Back to Customize
        </div>
      </footer>
    </div>
  );
};
