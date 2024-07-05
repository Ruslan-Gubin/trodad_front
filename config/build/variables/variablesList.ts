import { BuildMode } from "../types/types"


export const variablesList = (mode: BuildMode) => {
  const isDev = mode === 'development';
   
  return {
    BACKEND_URL: isDev ? JSON.stringify(process.env.BACKEND_URL_DEV) : JSON.stringify(process.env.BACKEND_URL_PROD),
    APP_MODE: isDev ? JSON.stringify(process.env.REACT_APP_STATUS_DEV) : JSON.stringify(process.env.REACT_APP_STATUS_PROD),
    REACT_APP_VERSION: JSON.stringify(require("../../../package.json").version) ?? "1.0.0",
    REACT_APP_STATUS: isDev ? JSON.stringify(process.env.REACT_APP_STATUS_DEV) : JSON.stringify(process.env.REACT_APP_STATUS_PROD),
  }
}
