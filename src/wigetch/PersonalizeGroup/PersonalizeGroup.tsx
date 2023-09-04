import React from 'react';
import s from './PersonalizeGroup.module.scss';
import { PersonalizeScreenStart } from '../../shared/UI/PersonalizeScreenStart/PersonalizeScreenStart';
import { UploadFile } from '../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
export const PersonalizeGroup = () => {
  return (
    <div className={s.group}>
      <PersonalizeScreenStart />

      <Outlet />
    </div>
  );
};
