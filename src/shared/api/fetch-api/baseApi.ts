import { fetchUrl, fethConfig } from "./fetch-config";
import { fetchRefreshToken, fetchSendError } from "./utils";

interface BaseFetchArgs {
  params?: Record<string, string>;
  url?: string;
  method: string;
  payload?: object;
}

export const baseFetch = async (
  args: BaseFetchArgs
) => {
  const { method, url, params, payload } = args;

  const _config = fethConfig(method, payload);
  const _url = fetchUrl(url, params);

  try {
    let response = await window.fetch(_url, _config);

    if (response.status === 401) {
      await fetchRefreshToken().then(async (accessToken) => {
        if (accessToken) {
          _config.headers.Authorization = `Bearer ${accessToken}`;
          response = await fetch(_url, _config);
        } else {
          if (typeof window !== "undefined") {
            setTimeout(() => (window.location.href = "/"), 2000);
          }
          throw "Не удалось обновить токен";
        }
      });
    }

    const json = await response.json();

    return json;
  } catch (error) {
    throw error;
  }
};
