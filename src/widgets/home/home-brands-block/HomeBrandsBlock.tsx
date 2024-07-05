import { MobileListTitleSvg } from "./ISO9001Svg";
import imGrid3GroupPocket from "../../../../public/assets/svg/im_grid3_group_pocket.png";

import styles from "./HomeBrandsBlock.module.scss";

const HomeBrandsBlock = () => {
  return (
    <>
      <section className={styles.root}>
        <div className={styles.tilteContainer}>
          <MobileListTitleSvg />
        </div>
        <footer className={styles.footer}>
          <img src={imGrid3GroupPocket} alt="Grid Mobile img" />
          <p className={styles.footerText}>
            Продукция с маркой Trodat известна в 170 странах мира. Высокое
            качество изделий подтверждает международный сертификат ISO 9001.
          </p>
        </footer>
      </section>
    </>
  );
};

export { HomeBrandsBlock };
