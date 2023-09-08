import s from '../../PreviewGroup.module.scss';
import { FC } from 'react';

type TablePreviewT = {
  title: string;
  img: any;
};

export const TablePreview: FC<TablePreviewT> = ({ ...props }) => {
  const { title, img } = props;
  return (
    <div className={s.tableWrapper}>
      <div className={s.tableTitle}>{title}</div>
      <div className={s.tableImg}>{img}</div>
    </div>
  );
};
