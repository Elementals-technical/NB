import React from 'react';
import s from './PersonalizeGroup.module.scss';
import { PersonalizeScreenStart } from '../../shared/UI/PersonalizeScreenStart/PersonalizeScreenStart';

import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSelectedLayers } from '../../shared/providers/redax/selectore';
import { PersonalizationList } from '../PersonalizationList/PersonalizationList';
export const PersonalizeGroup = () => {
  const selectedLayers = useSelector(getSelectedLayers);
  // const selectedLayers = [
  //   {
  //     typeArea: 'text',
  //     type: 'custom',
  //     nameThreekit: 'front 1',
  //   },
  //   {
  //     typeArea: 'text',
  //     type: 'player-name',
  //     nameThreekit: 'back 1',
  //   },
  //   {
  //     typeArea: 'text',
  //     type: 'player-number',
  //     nameThreekit: 'back 2',
  //   },
  // ];
  return (
    <div className={s.group}>
      <header>
        <div className={s.title}>Personalization summary</div>
      </header>
      <main>
        {selectedLayers.length < 1 && <PersonalizeScreenStart />}

        {selectedLayers.length > 0 && (
          <PersonalizationList layers={selectedLayers} />
        )}

        <Outlet />
      </main>
      <footer className={s.footer}>
        {selectedLayers.length > 0 && (
          <NavLink to={`settings`} className={s.btn}>
            Add another personalization
          </NavLink>
        )}
      </footer>
    </div>
  );
};
