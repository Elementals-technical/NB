import s from './TextEffect.module.scss';
import { LineParam } from '../../../shared/UI/LineParam/LineParam';
import { Select } from '../../../shared/UI/Select/Select';
import { LinerWrap } from '../../../shared/UI/BaseComponent/GroupComponent/LinerWrap/LinerWrap';
import { InputText } from '../../../shared/UI/BaseComponent/InputText/InputText';
import { IconStart } from '../../../shared/assets/svg/IconІStart';
import { useConfigurator } from '@threekit-tools/treble/dist';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getNameThreekitCurentLayer } from '../../../shared/providers/redax/selectore';
import {
  getValueThreekit,
  setValueThreekit,
} from '../../../shared/function/ThreekitAttributeText';

const textEffect = [
  {
    label: 'Curve',
    value: 'Curve',
  },
  {
    label: 'Bookend',
    value: 'Bookend',
  },
  {
    label: 'Shadow',
    value: 'Shadow',
  },
];

const optionsEffect = [
  { value: 'None', label: 'None' },
  { value: 'Bowtie', label: 'Bowtie' },
  { value: 'Arch', label: 'Arch' },
  { value: 'Bridge', label: 'Bridge' },
];
const optionsBookendEffect = [
  { value: 'true', label: 'Enabled' },
  { value: 'false', label: 'Dissable' },
];
const optionsShadowEffect = [
  { value: 'true', label: 'Enabled' },
  { value: 'false', label: 'Dissable' },
];

const getValueTextEffect = (
  attributes: any,
  nameThreekitCurentLayer: string
) => {
  const valueCurve = getValueThreekit(
    nameThreekitCurentLayer,
    attributes
  )('Text curve ');

  if (!valueCurve) return optionsEffect[0]['value'];

  const valueCurveStyle = getValueThreekit(
    nameThreekitCurentLayer,
    attributes
  )('Text curve Style ');

  return valueCurveStyle;
};

export const TextEffect = ({ nameText }: any) => {
  const [TextEffect, setTextEffect] = useState(textEffect[0]['value']);
  const nameThreekitCurentLayer = useSelector(getNameThreekitCurentLayer);

  const [attributes, setConfiguration]: any = useConfigurator();

  if (!nameThreekitCurentLayer) return <></>;
  if (Object.keys(attributes).length < 1) return <></>;

  const getValueThreekitFunc = getValueThreekit(
    nameThreekitCurentLayer,
    attributes
  );
  const setValueThreekitFunc = setValueThreekit(
    nameThreekitCurentLayer,
    setConfiguration
  );
  return (
    <div>
      <div className="">
        <LineParam
          name={'Choose text effects'}
          values={textEffect}
          isSelectedId={TextEffect}
          onClickBtn={(value: any) => {
            setTextEffect(value['value']);
          }}
        />
      </div>
      <div className={s.wrap}>
        {TextEffect === textEffect[0]['value'] && (
          <div className={s.group}>
            <div className={s.line}>
              <div className={s.box50}>
                {/* Text curve Style back 1 */}
                {/* Text curve back 1 */}
                <Select
                  title={'Text effect'}
                  options={optionsEffect}
                  value={getValueTextEffect(
                    attributes,
                    nameThreekitCurentLayer
                  )}
                  onChange={(value: any) => {
                    if (value === 'None') {
                      setValueThreekitFunc('Text curve ', false);
                    } else {
                      setValueThreekitFunc('Text curve ', true);
                    }
                    setValueThreekitFunc('Text curve Style ', value);
                  }}
                />
              </div>
              <div className={s.box}>
                {/* Text curve Amount front 1 */}
                <LinerWrap name={'Effect amount'}>
                  <InputText
                    value={getValueThreekitFunc('Text curve Amount ')}
                    onChange={(value: any) => {
                      const valueProp = value['target']['value'];
                      setValueThreekitFunc('Text curve Amount ', valueProp);
                    }}
                  />
                </LinerWrap>
              </div>
            </div>

            <div className={s.hintGroup}>
              <div className={s.icon}>
                <IconStart />
              </div>
              <div className={s.text}>
                You can enter the value of the curve from -1 to 1, with a step
                of 0.1
              </div>
            </div>
          </div>
        )}

        {TextEffect === textEffect[1]['value'] && (
          <div className={s.group}>
            <div className={s.line}>
              <div className={s.box50}>
                {/* Text Bookend Effect back 1 */}
                <Select
                  title={'Bookend'}
                  options={optionsBookendEffect}
                  value={`${getValueThreekitFunc('Text Bookend Effect ')}`}
                  onChange={(value: any) => {
                    setValueThreekitFunc(
                      'Text Bookend Effect ',
                      value === 'true' ? true : false
                    );
                  }}
                />
              </div>
              <div className={s.box}>
                {/* Text Bookend Effect Size front 1 */}
                <LinerWrap name={'Bookend amount'}>
                  <InputText
                    value={getValueThreekitFunc('Text Bookend Effect Size ')}
                    onChange={(value: any) => {
                      const valueProp = value['target']['value'];
                      setValueThreekitFunc(
                        'Text Bookend Effect Size ',
                        valueProp
                      );
                    }}
                  />
                </LinerWrap>
              </div>
            </div>
            <div className={s.hintGroup}>
              <div className={s.icon}>
                <IconStart />
              </div>
              <div className={s.text}>
                You can enter the value of the bookend from 10 to 250
              </div>
            </div>
          </div>
        )}
        {TextEffect === textEffect[2]['value'] && (
          <div className={s.group}>
            <div className={s.line}>
              <div className={s.box50}>
                {/* Text shadow back 1 */}
                <Select
                  title={'Shadow'}
                  options={optionsShadowEffect}
                  value={`${getValueThreekitFunc('Text shadow ')}`}
                  onChange={(value: any) => {
                    setValueThreekitFunc(
                      'Text shadow ',
                      value === 'true' ? true : false
                    );
                  }}
                />
              </div>
              {/* Text shadow color back 1 */}
              <div className={s.box}>
                <LinerWrap name={'Shadow color'}>
                  {/* <ColorSwatch title={'Shadow color'} attributes={'Text shadow color back 1'}  > */}
                </LinerWrap>
              </div>
            </div>
            <div className={s.lineProperty}>
              <div className={s.box25}>
                {/* Text shadow opacity back 1 */}
                <LinerWrap name={'Opacity'}>
                  <InputText
                    value={getValueThreekitFunc('Text shadow opacity ')}
                    onChange={(value: any) => {
                      const valueProp = value['target']['value'];
                      setValueThreekitFunc('Text shadow opacity ', valueProp);
                    }}
                  />
                </LinerWrap>
              </div>
              {/* Text shadow Thickness back 1 */}
              <div className={s.box25}>
                <LinerWrap name={'Thickness'}>
                  <InputText
                    value={getValueThreekitFunc('Text shadow Thickness ')}
                    onChange={(value: any) => {
                      const valueProp = value['target']['value'];
                      setValueThreekitFunc('Text shadow Thickness ', valueProp);
                    }}
                  />
                </LinerWrap>
              </div>
              {/* Text shadow Offset X back 1 */}
              <div className={s.box25}>
                <LinerWrap name={'Offset X'}>
                  <InputText
                    value={getValueThreekitFunc('Text shadow Offset X ')}
                    onChange={(value: any) => {
                      const valueProp = value['target']['value'];
                      setValueThreekitFunc('Text shadow Offset X ', valueProp);
                    }}
                  />
                </LinerWrap>
              </div>
              <div className={s.box25}>
                {/* Text shadow Offset Y back 1 */}
                <LinerWrap name={'Offset Y'}>
                  <InputText
                    value={getValueThreekitFunc('Text shadow Offset Y ')}
                    onChange={(value: any) => {
                      const valueProp = value['target']['value'];
                      setValueThreekitFunc('Text shadow Offset Y ', valueProp);
                    }}
                  />
                </LinerWrap>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
