export const getFormatPhone = (initPhone?: string) => {
  if (!initPhone) return null;
  return `${initPhone.slice(0, 1)} (${initPhone.slice(1, 4)}) ${initPhone.slice(
    4,
    7
  )}-${initPhone.slice(7, initPhone.length)}`;
};
