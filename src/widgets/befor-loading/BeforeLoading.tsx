import LoadingSvg from '../../../public/assets/svg/loading-button.svg';

import styles from "./BeforeLoading.module.scss";

const BeforeLoading = () => {

  return (
  <section className={styles.root}>
    <ul className={styles.content}>
      <LoadingSvg className={styles.loading} />
    </ul>
  </section>
  )};

export { BeforeLoading };
