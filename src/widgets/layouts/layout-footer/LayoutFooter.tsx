import { layoutStore } from "@/shared";
import footerLogoPng from "../../../../public/assets/svg/footerLogo.png";
import { CopyraiteLogo } from "./CopyraiteLogo";

import styles from "./LayoutFooter.module.scss";

const LayoutFooter = () => {
  const navsList = [
    {
      title: "Навигация",
      children: ["Категории", "О компании", "Контакты", "Профиль"],
    },
    {
      title: "Печати",
      children: ["Круглые", "Прямоугольные", "Плоские", "Рельефные"],
    },
    {
      title: "Штампы",
      children: [
        "Датер",
        "Овальные ",
        "Бухгалтерские",
        "Угловые",
        "Банковские",
      ],
    },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.contaner}>
          <div className={styles.leftSide}>
            <img
              className={styles.logo}
              src={footerLogoPng}
              alt="Footer Logo png"
            />
            <p className={styles.subTitle}>
              Крупнейший производитель оснасток для печатей и штампов в мире
            </p>

            <div className={styles.phoneContainer}>
              <button className={styles.phone}>+996  553 66 47 87</button>
              <span className={styles.textOr}>или</span>
              <button className={styles.phone}>+996 558 66 47 87</button>
            </div>
          </div>

          <ul className={styles.navsList}>
            {navsList.map((item) => (
              <li key={item.title} className={styles.navsItem}>
                <h3 className={styles.navsTitle}>{item.title}</h3>
                <ul className={styles.navsChildrenList}>
                  {item.children.map((children) => (
                    <li key={children} className={styles.childrenItem}>
                      {children}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className={styles.contacts}>
            <h3 className={styles.navsItem}>Контакты</h3>
            <p className={styles.email}>trodatkg@gmail.com</p>
            <p className={styles.address}>
              Токтогула 125/1 (Бизнес центр Avangard), Bishkek, Kyrgyzstan
            </p>
          </div>
        </div>
      </footer>
      <div className={styles.copyraitRoot}>
        <div className={styles.copyraitContainer}>
          <CopyraiteLogo />
          <p className={styles.copyraitText}>
            Trodat © 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export { LayoutFooter };
