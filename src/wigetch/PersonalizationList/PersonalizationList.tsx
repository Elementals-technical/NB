import { EditIcon } from '@threekit-tools/treble/dist';
import s from './PersonalizationList.module.scss';
import { DeleteIcon } from '../../shared/assets/svg/DeleteIcon';
import { options } from '../../features/layer/SettingsPersonaliztionCustomText/SettingsPersonaliztionCustomText';
import { listType } from '../../shared/UI/Control/ObjectTypeText/ObjectTypeText';

export const PersonalizationList = ({ layers }: any) => {
  return (
    <div className={s.personalizationList}>
      {layers.map((item: any) => {
        if (item['typeArea'] === 'text') {
          const valueObj = options.find(
            (i) => i['nameThrekit'] === item['nameThreekit']
          );
          if (!valueObj) return <></>;
          if (Object.keys(valueObj).length < 1) return <></>;
          const typeObj = listType.find((i) => i['value'] === item['type']);
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
                  <div className={`${s.btn} ${s.edit}`}>
                    <div className={s.icon}>
                      <EditIcon />
                    </div>
                    <div className={`${s.name}`}>Edit</div>
                  </div>
                  <div className={`${s.btn} ${s.delete}`}>
                    <div className={s.icon}>
                      <DeleteIcon />
                    </div>
                    <div className={s.name}>Delete</div>
                  </div>
                </div>
              </div>
              <div className={s.main}>
                {typeObj['value'] === 'custom' && (
                  <img src="images/custom-text.png" />
                )}
                {typeObj['value'] === 'player-name' && (
                  <img src="images/player_name.png" />
                )}
                {typeObj['value'] === 'player-number' && (
                  <img src="images/player_number.png" />
                )}
              </div>
              {['player-name', 'player-number'].includes(typeObj['value']) && (
                <div className={s.footer}>
                  <div className={s.btn_roster}>
                    <span>+</span> <span>Enter Roster List</span>
                  </div>
                </div>
              )}
            </div>
          );
        }

        if (item['typeArea'] === 'graphic') {
          const valueObj = options.find(
            (i) => i['nameThrekit'] === item['nameThreekit']
          );
          if (!valueObj) return <></>;
          if (Object.keys(valueObj).length < 1) return <></>;

          return (
            <div className={s.personalization}>
              <div className={s.header}>
                <div className={s.info}>
                  <div className={s.position}>{valueObj['label']}</div>
                  <div className={s.type}>Graphics</div>
                </div>
                <div className={s.box}>
                  <div className={`${s.btn} ${s.edit}`}>
                    <div className={s.icon}>
                      <EditIcon />
                    </div>
                    <div className={`${s.name}`}>Edit</div>
                  </div>
                  <div className={`${s.btn} ${s.delete}`}>
                    <div className={s.icon}>
                      <DeleteIcon />
                    </div>
                    <div className={s.name}>Delete</div>
                  </div>
                </div>
              </div>
              <div className={s.main}></div>
              <div className={s.footer}></div>
            </div>
          );
        }
      })}
    </div>
  );
};
