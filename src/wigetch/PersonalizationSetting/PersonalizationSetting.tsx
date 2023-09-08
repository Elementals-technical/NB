import s from './PersonalizationSetting.module.scss';
import { Outlet, useNavigate, useParams } from 'react-router';
import { BtnBack } from '../../shared/UI/BtnBack/BtnBack';
import { BackIcon } from '../../shared/assets/svg/BackIcon';
import { PersonalizationTypeAria } from '../../shared/UI/Control/PersonalizationTypeAria/PersonalizationTypeAria';
import { URL_PAGE } from '../../shared/function/providers/router/AppRouter';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setLayerArea } from '../../shared/function/providers/redax/action';
import { getCurentLayer } from '../../shared/function/providers/redax/selectore';
export const PersonalizationSetting = () => {
  const { configID } = useParams();
  if (!configID) return <></>;

  const curentLayer = useSelector(getCurentLayer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [attributes, setConfiguration]: any = useConfigurator();

  const savePersonal = () => {
    dispatch(setLayerArea(curentLayer));
    navigate(URL_PAGE.personalizePage(configID));
  };
  const onCancel = () => {
    navigate(URL_PAGE.personalizePage(configID));
  };

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
          </>
        )}
        <Outlet />
      </div>
      <footer>
        <div className="reset"></div>
        <div className={s.wrap_box}>
          <button className={s.btn_trancperent} onClick={onCancel}>
            Cancel
          </button>
          <button className={s.btn} onClick={savePersonal}>
            Save Personalization
          </button>
        </div>
      </footer>
    </div>
  );
};
