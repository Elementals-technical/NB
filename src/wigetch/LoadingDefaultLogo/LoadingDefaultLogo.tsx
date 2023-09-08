import s from './LoadingDefaultLogo.module.scss';
import { useState } from 'react';
import { IconPlus } from '../../shared/assets/svg/IconPlus';
import { ViewLoadImg } from '../../shared/UI/BaseComponent/ViewLoadImg/ViewLoadImg';
import { LoaderWrap } from '../../shared/UI/LoaderWrap.tsx/LoaderWrap';
import { OverlayingPopup } from '../../shared/UI/BaseComponent/OverlayingPopup/OverlayingPopup';
import { ModalsWrap } from '../../shared/UI/BaseComponent/ModalsWrap/ModalsWrap';
import {
  DefaultGraphics,
  listDefaultGraphicsImg,
} from '../../shared/UI/Modals/DefaultGraphics/DefaultGraphics';
import { useDispatch } from 'react-redux';
import { setThreekitAttribute } from '../../shared/function/providers/redax/action';
import { useSelector } from 'react-redux';
import { getLoadersName } from '../../shared/function/providers/redax/selectore';
import { useConfigurator } from '@threekit-tools/treble/dist';

export const getDefaultIcon = (value: string) => {
  return listDefaultGraphicsImg.find((img) => img['nameThreekit'] === value);
};

export const LoadingDefaultLogo = ({ zoneLogo }: any) => {
  const [openDefaultGrafic, setOpenDefaultGrafic] = useState(false);
  const [selectedDefaultGrafic, setSelectedDefaultGrafic] = useState(undefined);
  const [confirmDefaultGrafic, setConfirmDefaultGrafic] = useState(undefined);

  const loadChangeThreekit = useSelector(getLoadersName('loadChangeThreekit'));

  const [attributes, setConfiguration]: any = useConfigurator();

  const dispatch = useDispatch();
  if (!attributes) return <></>;

  const showModal = () => {
    setOpenDefaultGrafic(true);
    setSelectedDefaultGrafic(undefined);
  };

  const setDefaultLogogThreekit = async (nameThreekit: string) => {
    dispatch(setThreekitAttribute(true));
    console.log('attributes', attributes);

    let attr = Object.values(attributes).find((attr: any) =>
      attr['name'].includes('Add Logo front 1')
    );
    if (!attr) return;
    //@ts-ignore
    if (attr['values'].length < 1) return;
    //@ts-ignore
    const value = attr['values'].find(
      (value: any) => value['name'] === nameThreekit
    );
    const nameAttr = `Add Logo ${zoneLogo}`;

    await setConfiguration({ [nameAttr]: value });
    //@ts-ignore
    await window.threekit.player.evaluate();
    await dispatch(setThreekitAttribute(false));
  };

  const RemoteDefaultLogogThreekit = async () => {
    dispatch(setThreekitAttribute(true));
    setConfirmDefaultGrafic(undefined);
    const nameAttr = `Add Logo ${zoneLogo}`;
    await setConfiguration({ [nameAttr]: { assetId: '' } });
    //@ts-ignore
    await window.threekit.player.evaluate();
    await dispatch(setThreekitAttribute(false));
  };

  const IconInfo = confirmDefaultGrafic
    ? getDefaultIcon(confirmDefaultGrafic)
    : undefined;

  return (
    <>
      {!confirmDefaultGrafic && (
        <div className={s.box}>
          <div onClick={() => showModal()} className={s.btn_default}>
            <span>
              <IconPlus />
            </span>
            Add default graphics ss
          </div>
        </div>
      )}

      {loadChangeThreekit && (
        <ViewLoadImg
          name={''}
          typeLoad={'Default graphic'}
          removeFile={() => RemoteDefaultLogogThreekit()}
          content={
            <>
              <LoaderWrap />
            </>
          }
        />
      )}
      {!loadChangeThreekit && IconInfo && (
        <ViewLoadImg
          name={IconInfo.label}
          typeLoad={'Default graphic'}
          removeFile={() => RemoteDefaultLogogThreekit()}
          content={
            <>
              <img src={IconInfo.img} alt="" />
            </>
          }
        />
      )}

      <OverlayingPopup
        isOpened={openDefaultGrafic}
        onClose={() => setOpenDefaultGrafic(false)}
      >
        <ModalsWrap
          onCancel={() => setOpenDefaultGrafic(false)}
          onConfirm={() => {
            if (selectedDefaultGrafic) {
              setDefaultLogogThreekit(selectedDefaultGrafic);
              setConfirmDefaultGrafic(selectedDefaultGrafic);
            }

            setOpenDefaultGrafic(false);
          }}
          name={'Default graphics library'}
          isShowConfirm={selectedDefaultGrafic !== undefined}
        >
          <DefaultGraphics onChange={setSelectedDefaultGrafic} />
        </ModalsWrap>
      </OverlayingPopup>
    </>
  );
};
