import { Link, NavLink, redirect, useNavigate } from 'react-router-dom';
import s from './StartingScreen.module.scss';
import { useId } from 'react';

const groupsProducts = [
  {
    title: 'Custom Uniform',
    img: '/Custom_uniform.svg',
    poducts: [
      {
        link: '/product_Jersey.png',
        name: 'Jersey',
        idConfig: 'jersey',
        name_btn: 'Customize',
      },
      {
        link: '/product_Short.png',
        name: 'Short',
        idConfig: 'short',
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
        idConfig: 'w_hoodie',
        name_btn: 'Customize',
      },
      {
        link: '/product_W_pant.png',
        name: 'W pant',
        idConfig: 'w_pant',
        name_btn: 'Customize',
      },
    ],
  },
];

export const StartingScreen = () => {
  const navigate = useNavigate();

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
                        onClick={() => navigate(product.idConfig)}
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
