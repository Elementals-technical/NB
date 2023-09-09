import { EditIcon, useConfigurator } from '@threekit-tools/treble/dist';
import s from './PersonalizationList.module.scss';
import { DeleteIcon } from '../../shared/assets/svg/DeleteIcon';
import { options } from '../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { listType } from '../../shared/UI/Control/ObjectTypeText/ObjectTypeText';
import { useNavigate, useParams } from 'react-router-dom';
import { URL_PAGE } from '../../shared/function/providers/router/AppRouter';
import { useSelector } from 'react-redux';
import { getVisibleLayers } from '../../shared/function/providers/redax/selectore';
import { getDefaultIcon } from '../LoadingDefaultLogo/LoadingDefaultLogo';

export const PersonalizationList = ({ layers, isShowContol = true }: any) => {
  let { configID } = useParams();

  const visibleLayersText = useSelector(
    getVisibleLayers({ objectId: configID, typeZone: 'text' })
  );
  const visibleLayersGrapic = useSelector(
    getVisibleLayers({ objectId: configID, typeZone: 'graphic' })
  );
  const [attributes, setConfiguration]: any = useConfigurator();

  const navigate = useNavigate();
  return (
    <div className={s.personalizationList}>
      {layers.map((item: any) => {
        if (item['typeArea'] === 'text') {
          console.log('visibleLayersText', visibleLayersText);

          const valueObj = visibleLayersText.find(
            (i: any) => i['nameThreekit'] === item['nameThreekit']
          );
          if (!valueObj) return <></>;
          if (Object.keys(valueObj).length < 1) return <></>;
          const typeObj = listType.find(
            (i: any) => i['value'] === item['type']
          );
          if (!typeObj) return <></>;
          if (Object.keys(typeObj).length < 1) return <></>;

          return (
            <div className={s.personalization}>
              <div className={s.header}>
                <div className={s.info}>
                  <div className={s.position}>{valueObj['label']}</div>
                  <div className={s.type}>{typeObj['label']} | 10”</div>
                </div>
                <div className={s.box}>
                  {isShowContol && (
                    <>
                      <div className={`${s.btn} ${s.edit}`}>
                        <div className={s.icon}>
                          <EditIcon />
                        </div>
                        {/* <div className={`${s.name}`}>Edit</div> */}
                      </div>

                      <div className={`${s.btn} ${s.delete}`}>
                        <div className={s.icon}>
                          <DeleteIcon />
                        </div>
                        <div className={s.name}>Delete</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={s.main}>
                {typeObj['value'] === 'custom' && (
                  <img src="/images/custom-text.png" />
                )}
                {typeObj['value'] === 'player-name' && (
                  <img src="/images/player_name.png" />
                )}
                {typeObj['value'] === 'player-number' && (
                  <img src="/images/player_number.png" />
                )}
              </div>
              {['player-name', 'player-number'].includes(typeObj['value']) && (
                <div
                  className={s.footer}
                  onClick={() => navigate(item['nameThreekit'])}
                >
                  <div className={s.btn_roster}>
                    <span>+</span> <span>Enter Roster List</span>
                  </div>
                </div>
              )}
            </div>
          );
        }

        if (item['typeArea'] === 'graphic') {
          console.log('visibleLayersGrapic', visibleLayersGrapic);

          const valueObj = visibleLayersGrapic.find(
            (i) => i['nameThreekit'] === item['nameThreekit']
          );
          if (!valueObj) return <></>;
          if (Object.keys(valueObj).length < 1) return <></>;
          const nameAttr = `Add Logo ${item['nameThreekit']}`;

          let attr: any = Object.values(attributes).find((attr: any) =>
            attr['name'].includes(nameAttr)
          );
          if (!attr) return <></>;
          //@ts-ignore
          if (attr['values'].length < 1) return <></>;
          //@ts-ignore
          const value = attr['values'].find(
            (value: any) => value['assetId'] === attr['value']['assetId']
          );

          const IconInfo =
            item['type'] === 'default-graphic' && value['name']
              ? getDefaultIcon(value['name'])
              : undefined;

          return (
            <div className={s.personalization}>
              <div className={s.header}>
                <div className={s.info}>
                  <div className={s.position}>{valueObj['label']}</div>
                  <div className={s.type}>
                    {item['type'] === 'default-graphic' && 'Default graphic'}
                    {item['type'] === 'upload-graphic' && 'Upload graphic'}
                  </div>
                </div>
                <div className={s.box}>
                  {isShowContol && (
                    <>
                      <div className={`${s.btn} ${s.edit}`}>
                        <div className={s.icon}>
                          <EditIcon />
                        </div>
                        {/* <div className={`${s.name}`}>Edit</div> */}
                      </div>
                      <div className={`${s.btn} ${s.delete}`}>
                        <div className={s.icon}>
                          <DeleteIcon />
                        </div>
                        <div className={s.name}>Delete</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={s.main}>
                {item['type'] === 'upload-graphic' && (
                  <img
                    src={
                      //@ts-ignore
                      window['loadFile'][`Upload logo ${item['nameThreekit']}`]
                    }
                  />
                )}
                {item['type'] === 'default-graphic' && IconInfo && (
                  <img src={IconInfo.img} alt="" />
                )}
              </div>
              <div className={s.footer}></div>
            </div>
          );
        }
      })}
    </div>
  );
};
