import logo from '../../../public/assets/images/logo-footer.png';
import LoadingSvg from '../../../public/assets/svg/loading-button.svg';

import styles from "./BeforeLoading.module.scss";

const BeforeLoading = () => {

  return (
  <section className={styles.root}>
    <ul className={styles.content}>
      <LoadingSvg className={styles.loading} />
      <img className={styles.logo} src={logo} alt="Loading logo" />
    </ul>
  </section>
  )};

export { BeforeLoading };
