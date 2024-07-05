import { Outlet } from "react-router-dom";
import { LayoutHeader } from "../layout-header/LayoutHeader";
import { NotificationList } from "@/widgets/notification";
import { LayoutFooter } from "../layout-footer/LayoutFooter";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <main className={styles.root}>
      <LayoutHeader />
      <NotificationList />
      <Outlet />
      <LayoutFooter />
    </main>
  );
};

export { MainLayout };
