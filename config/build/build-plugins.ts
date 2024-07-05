import { DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { variablesList } from "./variables/variablesList";
import GenerateJsonPlugin from 'generate-json-webpack-plugin';
import { generateManifest } from "./generete-json/generateManifest";
// import CopyPlugin  from 'copy-webpack-plugin';




export function buildPlugins ({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins']  = [
    new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
    new DefinePlugin(variablesList(mode)),
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(paths.public, 'manifest.json'), to: paths.output }
    //   ]
    // }), 
    new GenerateJsonPlugin('manifest.json',  generateManifest()) as any
  ];


  if (isDev) {
    // plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin()); 
    plugins.push(new ReactRefreshPlugin());
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  
  return plugins;
}