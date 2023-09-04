import React from 'react';
import { Outlet } from 'react-router';
import { ObjectTypeText } from '../../../shared/UI/Control/ObjectTypeText/ObjectTypeText';

export const PersonalizationObjectText = () => {
  return (
    <>
      <ObjectTypeText />

      <Outlet />
    </>
  );
};
