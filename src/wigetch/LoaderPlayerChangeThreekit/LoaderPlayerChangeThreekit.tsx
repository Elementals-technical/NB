import { useSelector } from 'react-redux';
import { LoaderWrap } from '../../shared/UI/LoaderWrap.tsx/LoaderWrap';
import s from './LoaderPlayerChangeThreekit.module.scss';
import { getLoadersName } from '../../shared/function/providers/redax/selectore';
import { log } from 'console';

export const LoaderPlayerChangeThreekit = () => {
  const loadChangeThreekit = useSelector(getLoadersName('loadChangeThreekit'));
  console.log('loadChangeThreekit', loadChangeThreekit);

  if (loadChangeThreekit) return <LoaderWrap />;
  return <></>;
};
