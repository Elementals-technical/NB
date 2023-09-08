import { SaveDesign } from '../../assets/svg/SaveDesign';
import { useWindowWidth } from '../../function/useWindowWidth';
import { ModalsWrap } from '../BaseComponent/ModalsWrap/ModalsWrap';
import { OverlayingPopup } from '../BaseComponent/OverlayingPopup/OverlayingPopup';
import { BtnNavigate } from '../BtnNavigate/BtnNavigate';
import { SaveConfig } from '../Modals/SaveConfig/SaveConfig';
import { FC, useState } from 'react';
import s from './SaveConfiguration.module.scss';
export const SaveConfiguration: FC = () => {
  const windowWidth: any = useWindowWidth();
  const [openSaveModal, setOpenSaveModal] = useState(false);

  return (
    <>
      <BtnNavigate
        svg={<SaveDesign />}
        name={<>{windowWidth >= 992 ? 'Save design' : 'Save'}</>}
        clickHandler={() => setOpenSaveModal(true)}
      />
      <OverlayingPopup
        isOpened={openSaveModal}
        onClose={() => setOpenSaveModal(false)}
      >
        <ModalsWrap
          onCancel={() => setOpenSaveModal(false)}
          onConfirm={() => {
            setOpenSaveModal(false);
          }}
          addClassName={s.wrapper}
          name={'Save & Restore'}
        >
          <SaveConfig onChange={setOpenSaveModal} />
        </ModalsWrap>
      </OverlayingPopup>
    </>
  );
};
