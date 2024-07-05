import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import { buildBabelLoader } from "./loaders/babel/build-babel-loader";
import { imageLoader } from "./image/image-loader";
import { typescriptLoader } from "./loaders/typescript-loader";
import { styleLoader } from "./loaders/styleLoader";
import { fontLoader } from "./loaders/fontsLoader";
import { svgFnLoader } from "./loaders/svgLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const fontsLoader = fontLoader();
  const assetsLoader = imageLoader();
  const svgLoader = svgFnLoader();
  const scssLoader = styleLoader(isDev);
  const tsLoader = typescriptLoader(isDev);
  const babelLoader = buildBabelLoader(options);
  
  const currentLoader = options.loader === "babel" ? babelLoader : tsLoader;

  return [assetsLoader, scssLoader, currentLoader, svgLoader, fontsLoader];
}
