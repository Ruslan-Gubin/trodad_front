import { lazy } from "react";

export const HomePage = lazy(() => import("./Home/Home"));
export const CatalogLazyPage = lazy(() => import("./Catalog/CatalogPage"));
export const AgrementPage = lazy(() => import("./Agrement/Agrement"));
