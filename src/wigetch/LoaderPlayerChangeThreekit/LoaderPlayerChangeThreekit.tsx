import { useSelector } from 'react-redux';
import { LoaderWrap } from '../../shared/UI/LoaderWrap.tsx/LoaderWrap';
import { getLoadersName } from '../../shared/function/providers/redax/selectore';

export const LoaderPlayerChangeThreekit = () => {
  const loadChangeThreekit = useSelector(getLoadersName('loadChangeThreekit'));
  const loadShowReviewPage = useSelector(getLoadersName('loadShowReviewPage'));

  if (loadChangeThreekit || loadShowReviewPage) return <LoaderWrap />;
  return <></>;
};
