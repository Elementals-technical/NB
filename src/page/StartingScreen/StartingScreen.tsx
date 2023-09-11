import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import s from './StartingScreen.module.scss';
import { useId } from 'react';
import {
  getSelectedGraphicLayers,
  getSelectedTextLayers,
} from '../../shared/function/providers/redax/selectore';
import { useSelector } from 'react-redux';
import { resetArea } from '../../shared/function/providers/redax/action';
import {
  defaultObjText,
  replaceKeywordInObject,
} from '../../features/layer/PersonalizationObjectTextRuster/PersonalizationObjectTextRuster';
import { useDispatch } from 'react-redux';
import { defaultObjLogo } from '../../features/layer/PersonalizationObjectGraphics/PersonalizationObjectGraphics';

const groupsProducts = [
  {
    title: 'Custom Uniform',
    img: '/Custom_uniform.svg',
    poducts: [
      {
        link: '/product_Jersey.png',
        name: 'Jersey',
        idConfig: 'Jersey',
        name_btn: 'Customize',
      },
      {
        link: '/product_Short.png',
        name: 'Short',
        idConfig: 'Shorts',
        name_btn: 'Customize',
      },
    ],
  },
  {
    title: 'Embellished Products',
    img: '/Embellished_Products.svg',
    poducts: [
      {
        link: '/product_W_hoodie.png',
        name: 'W hoodie',
        idConfig: 'Hoodie',
        name_btn: 'Customize',
      },
      {
        link: '/product_W_pant.png',
        name: 'W pant',
        idConfig: 'Pants',
        name_btn: 'Customize',
      },
    ],
  },
];

export const StartingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedGraphicLayers = useSelector(getSelectedGraphicLayers);
  const selectedTextLayers = useSelector(getSelectedTextLayers);

  const onNavigatePage = (idPage: string) => {
    if (selectedTextLayers.length > 0) {
      //@ts-ignore
      if (
        window &&
        window.threekit &&
        window.threekit.configurator &&
        //@ts-ignore
        window.threekit.configurator.setConfiguration
      ) {
        let restText = {};
        selectedTextLayers.forEach((idArea: any) => {
          let objText = replaceKeywordInObject(
            defaultObjText,
            'back 2',
            idArea
          );
          restText = {
            ...restText,
            ...objText,
          };
        });

        //@ts-ignore
        window.threekit.configurator.setConfiguration({ ...restText });
      }
    }

    if (selectedGraphicLayers.length > 0) {
      //@ts-ignore
      if (
        window &&
        window.threekit &&
        window.threekit.configurator &&
        //@ts-ignore
        window.threekit.configurator.setConfiguration
      ) {
        let restLogo = {};
        selectedGraphicLayers.forEach((grapic: any) => {
          let objGrap = replaceKeywordInObject(
            defaultObjLogo,
            'back 2',
            grapic['nameThreekit']
          );
          restLogo = {
            ...restLogo,
            ...objGrap,
          };
        });

        //@ts-ignore
        window.threekit.configurator.setConfiguration({ ...restLogo });
      }
    }
    dispatch(resetArea());
    navigate(idPage);
  };

  return (
    <div className={s.page_wrap}>
      <div className={s.page}>
        <div className={s.header}>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className={s.main}>
          {groupsProducts.map((group) => {
            return (
              <div key={useId()} className={s.section}>
                <div className={s.title}>{group.title}</div>
                <div className={s.wrap}>
                  <div className={s.wrapBg}>
                    <img src={`/images/${group.img}`} alt={group.title} />
                  </div>
                  {group.poducts.map((product) => (
                    <>
                      <div
                        key={useId()}
                        onClick={() => onNavigatePage(product.idConfig)}
                        className={s.product}
                      >
                        <div className={s.img}>
                          <img src={`/images/${product.link}`} alt="Jersey" />
                        </div>
                        <div className={s.name}>{product.name}</div>
                        <div className={s.btn}>{product.name_btn}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            );
          })}
          <div className={s.footer}>
            <img src="/images/moto.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
