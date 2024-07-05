
const translateRolesEn: Record<string, string> = {
  'Пользователь': 'user',
  'Оптовый покупатель': 'wholesaler',
  'Админ': 'admin',
};

const translateRolesRu: Record<string, string> = {
  user: 'Пользователь',
  wholesaler: 'Оптовый покупатель',
  admin: 'Админ',
};

export const getRoleParams = (valueRu: string): string => {
  return translateRolesEn[valueRu];
}

export const getRoleTranslate = (valueEn: string): string => {
  return translateRolesRu[valueEn];
}

export const getArrayRolesTranslate = (rolesData: string[]): string[] => {
  return rolesData.map(item => translateRolesRu[item])
}