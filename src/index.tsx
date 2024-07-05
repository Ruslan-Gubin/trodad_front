import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { Providers, routerApp } from "./app";
import { BeforeLoading } from "./widgets";

import "./app/styles/globals.scss";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <Providers>
    <Suspense fallback={<BeforeLoading />}>
      <RouterProvider router={routerApp} />
    </Suspense>
  </Providers>
);
