

import { ChildrenNodeType } from "@/shared/types/children";
import styles from "./Container.module.scss";

const Container = ({children}: { children: ChildrenNodeType}) => {


  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

export  {Container};