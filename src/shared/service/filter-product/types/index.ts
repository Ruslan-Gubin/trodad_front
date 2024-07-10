export type ContactsType = {
  phone: string;
  email: string;
  contactVk: string;
  contactYoutube: string;
  contactInst: string;
  contactFacebook: string;
  contactAppStore: string;
  contactGooglePlay: string;
};

export type FilterProductInitState = {
  searchValue: string;
  priceMinValue: number;
  priceMaxValue: number;
  diameterMinValue: number;
  diameterMaxValue: number;
  categoryIds: string[];
  currentPage: number;
  totalCountProduct: number | null;
};
