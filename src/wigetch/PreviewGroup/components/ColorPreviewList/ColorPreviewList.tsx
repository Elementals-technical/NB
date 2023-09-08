import s from '../../PreviewGroup.module.scss';
import { FC } from 'react';

type ColorPreviewListT = {
  colorData: any;
};
export const ColorPreviewList: FC<ColorPreviewListT> = ({ ...props }) => {
  const { colorData } = props;
  return (
    <div className={s.colorWrapper}>
      {colorData &&
        colorData.map((item: any, index: number) => {
          return (
            <div className={s.colorItem} key={`colorList_${index}`}>
              <div className={s.colorTitle}>{item.title}</div>
              <div className={s.colorValue}>
                <div
                  className={s.colorTag}
                  style={{ background: item.colorTag }}
                ></div>
                <div className={s.colorName}>{item.colorName}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
