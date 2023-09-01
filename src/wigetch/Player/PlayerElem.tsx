import { Player, ThreekitProvider } from '@threekit-tools/treble/dist';
import s from './Player.module.scss';
export const PlayerElem = () => {
  return (
    <div className={s.player}>
      <div className="tk-treble-player">
        <Player />
      </div>
    </div>
  );
};
