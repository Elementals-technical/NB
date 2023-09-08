import { Trash } from '../../../assets/svg/Trash';
import s from './ViewLoadImg.module.scss';

interface Props {
  name: string;
  typeLoad: string;
  removeFile: () => void;
  content: any;
  [key: string]: any;
}

export const ViewLoadImg = ({ name, typeLoad, removeFile, content }: Props) => {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>
          <div className={s.name}>{typeLoad}</div>
          <div className={s.fileName}>{name}</div>
        </div>
        <div onClick={() => removeFile()} className={s.remove}>
          <div className={s.icon}>
            <Trash />
          </div>
          <div className={s.text}>Delete</div>
        </div>
      </div>
      <div className={s.main}>
        <div className={s.fileUploadContainer}>{content}</div>
      </div>
    </div>
  );
};
