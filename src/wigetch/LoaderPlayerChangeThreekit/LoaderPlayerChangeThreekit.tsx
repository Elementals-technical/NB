import { useSelector } from 'react-redux';
import { LoaderWrap } from '../../shared/UI/LoaderWrap.tsx/LoaderWrap';
import { getLoadersName } from '../../shared/function/providers/redax/selectore';
import { useEffect } from 'react';
import { useParams } from 'react-router';
export const LoaderPlayerChangeThreekit = () => {
  const loadChangeThreekit = useSelector(getLoadersName('loadChangeThreekit'));

  if (loadChangeThreekit) return <LoaderWrap />;
  return <></>;
};
