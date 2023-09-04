import { useParams } from 'react-router';
import { SaveDesign } from '../../../assets/svg/SaveDesign';
import { BtnNavigate } from '../../BtnNavigate/BtnNavigate';
import s from './Navigation.module.scss';
import { getProductByKey } from '../../../data/productInformation';

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
        <BtnNavigate svg={<SaveDesign />} name={<>Save design</>} />
        {/* <BtnNavigate
      svg={<TransferIcon />}
      name={
        <>
          Transfer design to <strong>W Hoodie</strong>
        </>
      }
    /> */}
      </div>
      <div className=""></div>
    </div>
  );
};
