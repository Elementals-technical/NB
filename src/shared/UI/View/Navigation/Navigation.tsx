import { useParams } from 'react-router';
import { SaveDesign } from '../../../assets/svg/SaveDesign';
import { BtnNavigate } from '../../BtnNavigate/BtnNavigate';
import s from './Navigation.module.scss';
import { getProductByKey } from '../../../data/productInformation';
import { SaveConfiguration } from '../../SaveConfiguration/SaveConfiguration';
import { TransferIcon } from '../../../assets/svg/TransferIcon';
import { TransferNav } from '../../Control/TransferNav/TransferNav';
export const Navigation = () => {
  let { configID } = useParams();
  if (!configID) return <></>;

  const product = getProductByKey(configID);
  if (!product) return <></>;

  return (
    <div className={s.navigation}>
      <div className={s.logoText}>
        <div className={s.title}>{product['name']}</div>
        <div className={s.subTitle}>{product['category']}</div>
      </div>
      <div className={s.navigate_box}>
        <SaveConfiguration />
        <TransferNav />
      </div>
      <div className={s.test}></div>
    </div>
  );
};
