import React from 'react';
import { UploadFile } from '../../shared/UI/UploadFile/UploadFile';
import axios from 'axios';
import s from './PersonalizationSetting.module.scss';
import { Outlet, useNavigate, useParams } from 'react-router';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { BackIcon } from '../../shared/assets/svg/BackIcon';
import { LineParam } from '../../shared/UI/LineParam/LineParam';
import { AITextIcon } from '../../shared/assets/svg/AITextIcon';
import { GraphicIcon } from '../../shared/assets/svg/GraphicIcon';
import { PersonalizationTypeAria } from '../../shared/UI/Control/PersonalizationTypeAria/PersonalizationTypeAria';
import { URLS, URL_PAGE } from '../../shared/providers/router/AppRouter';
export const PersonalizationSetting = () => {
  const { configID } = useParams();
  if (!configID) return <></>;

  const navigate = useNavigate();

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <BtnBack
          icon={<BackIcon />}
          name={'Close personalization'}
          onClick={() => navigate(URL_PAGE.personalizePage(configID))}
        />
      </div>
      <div className={s.main}>
        <PersonalizationTypeAria />

        <Outlet />
      </div>
      <footer>
        <div className="reset"></div>
        <div className="wrap_box">
          <button>Cancel</button>
          <button>Save Personalization</button>
        </div>
      </footer>
    </div>
  );
};
