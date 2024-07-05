export function fontLoader(): {
  test: RegExp;
  loader: string;
  type: string;
} {
  return {
    test: /\.woff2,ttf,otf,eot?$/i,
    loader: "file-loader",
    type: "asset/resource",
  };
}
