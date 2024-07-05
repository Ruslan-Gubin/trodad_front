import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={styles.root}>
      <section className={styles.content}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <h2 className={styles.notFoundSubTitle}>страница не найдена</h2>
        <p className={styles.notFoundText}>
          страница, на которую вы пытаетесь попасть, не существует или была
          удалена.
        </p>
        <h4 className={styles.linkText}>
          Перейдите{" "}
          <Link className={styles.linkGoHome} to={"/"}>
            на главную
          </Link>
        </h4>
      </section>
    </section>
  );
};

export { NotFound };
