import s from '../../PreviewGroup.module.scss';

export const PlayerPerspective = ({ listSnapshot }: any) => {
  return (
    <div className={s.playerWrapper}>
      <div className={s.playerScroll}>
        {listSnapshot.map((snapshot: any) => {
          return (
            <div className={s.playerItem}>
              <div className={s.playerTitle}>{snapshot['name']}</div>
              <div className={s.playerImg}>
                <img src={snapshot['base64']} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
