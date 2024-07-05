import { version } from '../../../package.json'

export const generateManifest = () => {
  return {
    short_name: "Gk-maximum lending",
    name: "Gk-maximum application lending frontend",
    build: version ? version : '0.0.1',
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/assets/logo-gk.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
};
