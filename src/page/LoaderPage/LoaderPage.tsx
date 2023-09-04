import React from 'react';

import { LogoNSmal } from '../../shared/assets/svg/LogoNSmal';
import s from './LoaderPage.module.scss';
import { useThreekitInitStatus } from '@threekit-tools/treble/dist';
export const LoaderPage = () => {
  const hasLoadedStatus = useThreekitInitStatus();

  const hasLoadedPage = hasLoadedStatus;

  return !hasLoadedPage ? (
    // <div className={s.wrapPage}>
    //   <div className={s.main}>
    //     <div className={s.logo}>
    //       <LogoNSmal />
    //     </div>
    //     <div className={s.title}>We're preparing your content</div>
    //     <div className={s.subTitle}>This shouldn't take too long</div>
    //   </div>
    // </div>
    <></>
  ) : (
    <></>
  );
};
