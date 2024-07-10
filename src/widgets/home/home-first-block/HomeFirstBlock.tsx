import DemoMobilePng from "../../../../public/assets/images/860shots_so.png";
import BackgroundDemoMobilePng from "../../../../public/assets/images/contacts-background.png";
import GooglePlaySvg from "../../../../public/assets/svg/google-play.svg";
import AppStoreSvg from "../../../../public/assets/svg/app-store.svg";
import { Link } from "react-router-dom";
import { layoutStore } from "@/shared";
import EcologPng from "../../../../public/assets/svg/ecoLog.png";

import firstBlockImagePng from "../../../../public/assets/svg/firstBlockImage.png";
import firstBlockImg1 from "../../../../public/assets/svg/firstBlockImg1.png";
import firstBlockImg2 from "../../../../public/assets/svg/firstBlockImg2.png";
import firstBlockImg3 from "../../../../public/assets/svg/firstBlockImg3.png";
import firstBlockImg4 from "../../../../public/assets/svg/firstBlockImg4.png";
import firstBlockImg5 from "../../../../public/assets/svg/firstBlockImg5.png";

import { BtnPrevSvg } from "./BtnPrevSvg";
import styles from "./HomeFirstBlock.module.scss";

const HomeFirstBlock = () => {
  

  return (
    <section className={styles.root}>
      <div className={styles.blockContent}>
        <article className={styles.leftSide}>
          <h1 className={styles.title}>Изготавливаем печати и штампы</h1>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Единственный официальный представитель
            </p>
            <p className={styles.description}>
              <strong>Trodat GmBH</strong>
              на территории Кыргызстана с 2006 года.
            </p>
          </div>
          <Link to={'/catalog'}>
          <button className={styles.button}>Каталог</button>
          </Link>
          <div className={styles.leftSideFooter}>
            <img
              className={styles.ecologPng}
              src={EcologPng}
              alt="Eco log Png"
            />
            <div className={styles.leftSideFooterDescriptionContainer}>
              <p className={styles.leftSideFooterDescription}>
                Использования до <strong>75%</strong> переработанного пластика
                позволило нам свести выбросы
              </p>
              <strong>CO2 к минимуму</strong>
            </div>
          </div>
        </article>

        <section className={styles.rightSide}>
          <img
            className={styles.backgrounddemoMobileImg}
            src={firstBlockImagePng}
            alt="Background demo mobile png"
          />
        </section>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContentWrapper}>
          <div className={styles.footerNavigationBlock}>
            <div className={styles.sliderCountContainer}>
              <p className={styles.firstSlideCount}>01</p>
              <p className={styles.brSlideCount}>/</p>
              <p className={styles.tailSlideCount}>04</p>
            </div>
            <div className={styles.buttonSliderContainer}>
              <button className={styles.slidPrevBtn}>
                <BtnPrevSvg />
              </button>
              <button className={styles.slidPrevBtnNext}>
                <BtnPrevSvg />
              </button>
            </div>
          </div>

          <ul className={styles.fotoSliderList}>
            <img
              className={styles.sliderImg}
              src={firstBlockImg1}
              alt="firstBlock1 Img"
            />
            <img
              className={styles.sliderImg}
              src={firstBlockImg2}
              alt="firstBlock2 Img"
            />
            <img
              className={styles.sliderImg}
              src={firstBlockImg3}
              alt="firstBlock3 Img"
            />
            <img
              className={styles.sliderImg}
              src={firstBlockImg4}
              alt="firstBlock4 Img"
            />
            <img
              className={styles.sliderImg}
              src={firstBlockImg5}
              alt="firstBlock5 Img"
            />
          </ul>
        </div>
      </footer>
    </section>
  );
};

export { HomeFirstBlock };
