import secondBlockBigImg from "../../../../public/assets/svg/secondBlockBigImg.png";
import secondBlockSmallImg from "../../../../public/assets/svg/secondBlockSmallPng.png";
import SecondBlockPaginationSvg from "../../../../public/assets/svg/secondBlockPagination.svg";
import { BtnPrevSvg } from "../home-first-block/BtnPrevSvg";
import { TrodatBiscecSvg } from "./TrodatBiscecSvg";
import { TrodatGroupLogo } from "./trodatGroupLogo";

import styles from "./HomeAdvantagesBlock.module.scss";

const HomeAdvantagesBlock = () => {
  return (
    <>
      <div id="advantages" className={styles.anhor}></div>
      <section className={styles.root}>
        <section className={styles.leftSide}>
          <img
            className={styles.secondBlockBigImg}
            src={secondBlockBigImg}
            alt="Second Block Big Img"
          />
          <img
            className={styles.secondBlockSmallImg}
            src={secondBlockSmallImg}
            alt="Second Block Small Img"
          />

          <div className={styles.leftSideFooterContainer}>
            <div className={styles.sliderButtons}>
              <BtnPrevSvg color="black" />
              <div className={styles.siderNext}>
                <BtnPrevSvg color="black" />
              </div>
            </div>

            <SecondBlockPaginationSvg
              width={50}
              height={10}
              className={styles.paginationSvg}
            />
          </div>
        </section>

        <section className={styles.rightSide}>
          <div className={styles.trodatBiscecSvg}>
            <TrodatBiscecSvg />
          </div>
          <h2 className={styles.firstTitle}>Всегда на шаг впереди</h2>
          <hr className={styles.rightBlockHr} />

          <p className={styles.rightBlockText}>
            Мы являемся лояльными партнерами для наших клиентов, и мы
            рассматриваем их успех как нашу ответственность. Создавая
            материальную и нематериальную ценность для наших клиентов, наши
            продукты обеспечивают им конкурентное рыночное преимущество и
            прибыль.
          </p>
          <TrodatGroupLogo />

          <div className={styles.rightSideNavigates}>
            <p className={styles.rightSideNavigatesItem}>Трогруппа</p>
            <p className={styles.rightSideNavigatesItem}>
              Ориентированы на клиента
            </p>
          </div>

          <p className={styles.rightSubText}>
            Основана в 1912 году. Trodat – это почти столетняя история,
            посвященная искусству создания уникальной штемпельной продукции.
          </p>
          <button className={styles.rightSideBtnAbout}>Подробнее о нас</button>
        </section>
      </section>
    </>
  );
};

export { HomeAdvantagesBlock };
