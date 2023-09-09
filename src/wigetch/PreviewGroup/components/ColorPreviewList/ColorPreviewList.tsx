import { useAttribute } from '@threekit-tools/treble/dist';
import { valueThreekitMainColor } from '../../../../shared/UI/ListColor/ListColor';
import s from '../../PreviewGroup.module.scss';

export const ColorPreviewList = () => {
  const [attribute, setAttribute] = useAttribute('Color');

  if (!attribute) return <></>;
  const slectedColor = valueThreekitMainColor.find(
    (color) => color['value'] === attribute['value']
  );
  if (!slectedColor) return <></>;

  return (
    <div className={s.colorWrapper}>
      <div className={s.colorItem}>
        <div className={s.colorTitle}>Short color</div>
        <div className={s.colorValue}>
          <div
            className={s.colorTag}
            style={{ background: slectedColor.hex }}
          ></div>
          <div className={s.colorName}>{slectedColor['label']}</div>
        </div>
      </div>
    </div>
  );
};
