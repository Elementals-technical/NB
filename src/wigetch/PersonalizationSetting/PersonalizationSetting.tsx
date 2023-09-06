import s from './PersonalizationSetting.module.scss';
import { Outlet, useNavigate, useParams } from 'react-router';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { BackIcon } from '../../shared/assets/svg/BackIcon';
import { PersonalizationTypeAria } from '../../shared/UI/Control/PersonalizationTypeAria/PersonalizationTypeAria';
import { URL_PAGE } from '../../shared/providers/router/AppRouter';
import { useConfigurator } from '@threekit-tools/treble/dist';
export const PersonalizationSetting = () => {
  const { configID } = useParams();
  if (!configID) return <></>;

  const navigate = useNavigate();
  const [attributes, setConfiguration]: any = useConfigurator();

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
        {Object.keys(attributes).length > 1 && (
          <>
            <PersonalizationTypeAria />

            <Outlet />
          </>
        )}
      </div>
      <footer>
        <div className="reset"></div>
        <div className={s.wrap_box}>
          <button className={s.btn_trancperent}>Cancel</button>
          <button className={s.btn}>Save Personalization</button>
        </div>
      </footer>
    </div>
  );
};
