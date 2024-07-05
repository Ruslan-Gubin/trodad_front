import { CONFIG_APP } from '../config/config'

const checkKeyRoute = (obj: Record<string, string>, patch: string) => {
  let result = '';

  for (let field in obj) {
    if (patch.includes(field)) {
      result = obj[field];
      break;
    }
  }

  return result;
}

export const getTitleHeader = (patch: string): string | null => {
  const staticPatch = CONFIG_APP.METODATA_TITLES[patch];

  if (staticPatch) {
   return staticPatch;
  }

  return checkKeyRoute(CONFIG_APP.METODATA_TITLES_DINAMIC, patch);
}