import reviewImg from "../../../../public/assets/images/review-img.png";
import categoryListItemImg from "../../../../public/assets/svg/categoryListItemImg.png"
import { NavigateArrowSvg } from "./NavigateArrowSvg";

import styles from "./HomeReviewsBlock.module.scss";
;

const HomeReviewsBlock = () => {

  const mockProduct =  [1,2,3,4,5,6,7,8,9];
  

  const navigeteList = ['Для работы', 'Для дома', 'Рекомендуем'];

  return (
    <>
      <section className={styles.root}>
  
   <div className={styles.container}>


            <h1 className={styles.headerBlockTitle}>
            Категории 
            штампов и печатей
            </h1>
           <p className={styles.subTile}>
           Мы предлагаем полный комплекс диагностических, лечебных, эстетических и хирургических стоматологических услуг.
           </p>

           <ul className={styles.contentNavigate}>
            {navigeteList.map(item =>
          <li className={styles.navigateItem} key={item}>
          {item}
          <NavigateArrowSvg />
          </li>
            )}
           </ul>


          <ul className={styles.reviewsList}>
            {mockProduct.map((item) => (
              <li key={item} className={styles.reviewsListItem}>
                <div className={styles.imageBlock}>
                <img
                  className={styles.reviewsListItemImg}
                  src={categoryListItemImg}
                  alt="Product item img"
                  />
                </div>
                <div className={styles.leftSide}>
                  <h3 className={styles.leftSideTitle}>Круглые печати</h3>

                  <div className={styles.leftSideFooter}>
              <button className={styles.leftSideFooterBtn}>
              подробнее
              </button>
              <span className={styles.leftSideFooterCount}>26</span>
                  </div>

                </div>
              </li>
            ))}
          </ul>
            <footer className={styles.blockFooter}>
            <button className={styles.footerBtn}>Каталог</button>
            </footer>

          </div>
      </section>
    </>
  );
};

export { HomeReviewsBlock };
