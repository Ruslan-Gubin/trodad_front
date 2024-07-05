export const getArrayImgInStringArr = (str: string | string[] | null) =>
  typeof str === "string" && JSON.parse(str);
