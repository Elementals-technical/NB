import React from 'react';
import { LinerWrap } from '../../BaseComponent/GroupComponent/LinerWrap/LinerWrap';
import { InputText } from '../../BaseComponent/InputText/InputText';

export const SaveConfig = () => {
  return (
    <>
      <div className="">
        <div className="">Save Configuration</div>
        <div className="">
          Send via email to save / share your current configuration
        </div>
      </div>
      <LinerWrap name={'Enter email'}>
        <InputText onChange={() => {}} placeholder={'example@gmail.com'} />
      </LinerWrap>
      <footer>
        <div className="text">
          You can view all the items that you have selected by following the
          link below
        </div>
        <div className="copy">
          https://newbalanceteamsports.com/jersey/config=dyzPR-1Bf
        </div>
        <>Copy link</>
      </footer>
    </>
  );
};
