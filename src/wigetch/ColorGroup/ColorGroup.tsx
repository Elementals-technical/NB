import { useParams } from 'react-router-dom';
import { DestributeComponent } from '../DestributeComponent/DestributeComponent';
import s from './ColorGroup.module.scss';
import { SectionBase } from '../../shared/data/structureUI';
export const ColorGroup = () => {
  let { configID } = useParams();
  if (!configID) return <></>;
  return (
    <div className={s.group}>
      <DestributeComponent {...SectionBase[configID][0]}></DestributeComponent>
    </div>
  );
};
