import React from 'react';
import s from './PreviewGroup.module.scss';
import { PersonalizeScreenStart } from '../../shared/UI/PersonalizeScreenStart/PersonalizeScreenStart';

import { useLoaderData, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectedLayers } from '../../shared/function/providers/redax/selectore';
import { PlayerPerspective } from './components/PlayerPerspective/PlayerPerspective';
import { PersonalizationList } from '../PersonalizationList/PersonalizationList';
import { getSnaphots } from '../../shared/function/Threekit/spanphot';
const colorData = [
  {
    title: 'Short color',
    colorName: 'Orange',
    colorTag: '#E85328',
  },
];

export const PreviewGroup = () => {
  const selectedLayers = useSelector(getSelectedLayers);
  const navigate = useNavigate();
  //@ts-ignore
  const { listSnapshot } = useLoaderData();
  console.log('propsLoaded', listSnapshot);

  return (
    <div className={s.wrapper}>
      {listSnapshot && <PlayerPerspective listSnapshot={listSnapshot} />}

      <header>
        <div className={s.title}>Customization review</div>
      </header>
      <main>
        {selectedLayers.length < 1 && (
          <PersonalizeScreenStart name={'Review product'} />
        )}

        {selectedLayers.length > 0 && (
          <PersonalizationList layers={selectedLayers} isShowContol={false} />
        )}
      </main>

      <footer>
        <div className={s.cancel} onClick={() => navigate(-1)}>
          Back to Customize
        </div>
      </footer>
    </div>
  );
};
