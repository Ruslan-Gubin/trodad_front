import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as page from "../../pages";
import { NAV } from "./nav-links";
import { MainLayout } from "@/widgets/layouts/main-layout/MainLayout";
import { NotFoundPage } from "@/pages/NotFound/NotFound";

export const routerApp = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={`${NAV.MAIN}`} element={<MainLayout />}>
        <Route index element={<page.HomePage />} />
        <Route path={NAV.CATALOG} element={<page.CatalogLazyPage />} />
      </Route>
      <Route path={"*"} element={<NotFoundPage />} />
    </>
  )
);
