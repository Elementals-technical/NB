import { Player, ThreekitProvider } from '@threekit-tools/treble/dist';
import s from './Player.module.scss';
import { LoaderPlayerChangeThreekit } from '../LoaderPlayerChangeThreekit/LoaderPlayerChangeThreekit';
export const PlayerElem = () => {
  return (
    <div className={s.player}>
      <LoaderPlayerChangeThreekit />
      <div className="tk-treble-player">
        <Player />
      </div>
    </div>
  );
};
