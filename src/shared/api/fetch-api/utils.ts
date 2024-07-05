import { z } from "zod";
import {  createResponseSchema } from "@/shared/service";
import { CONFIG_APP } from "../../config";
import { CookieService } from "@/shared/service/cookie/CookieService";

export const RefreshTokenResponseSchema = z.object({
  tokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

export const RefreshTokenResponse = createResponseSchema(RefreshTokenResponseSchema);

export const getToken = () => CookieService.get(CONFIG_APP.ACCESS_TOKEN_COOKIE);

export const getRefreshToken = () => CookieService.get(CONFIG_APP.REFRESH_TOKEN_COOKIE);


export const fetchRefreshToken = () => {
  const url = new URL(`${CONFIG_APP.API_ENDPOINT}/api/refresh`);
  const refreshToken = getRefreshToken();

 return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  })
  .then(response => response.json())
  .then(data => RefreshTokenResponse.parseAsync(data))
  .then(response => {
    if (response.status === 'success' && response.data) {
      const { accessToken, refreshToken } = response.data.tokens;
      CookieService.set(accessToken, CONFIG_APP.ACCESS_TOKEN_COOKIE);
      CookieService.set(refreshToken, CONFIG_APP.REFRESH_TOKEN_COOKIE);
      return accessToken ;
    } else {
      CookieService.delete(CONFIG_APP.ACCESS_TOKEN_COOKIE);
      CookieService.delete(CONFIG_APP.REFRESH_TOKEN_COOKIE);
      return null;
    }
  })
}


export async function fetchSendError({
  message,
  status,
  url,
}: {
  message: string;
  status: number;
  url: string;
}): Promise<any> {
  const payloadError = {
    message: message,
    isFatal: true,
    name: `status: ${status} url: ${url}`,
  };

  fetch(`${CONFIG_APP.API_ENDPOINT}/api/logs/frontend`, {
    method: "POST",
    body: JSON.stringify(payloadError),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

