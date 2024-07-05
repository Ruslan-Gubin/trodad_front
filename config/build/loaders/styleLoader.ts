import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function styleLoader(isDev: boolean) {
  const cssLoaderWithModule = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const loader = {
    test: /\.(c|sa|sc)ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModule,
      "sass-loader",
    ],
  }

  return loader;
}