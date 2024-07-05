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

export type LayoutInitState = {
  sideBarMenuState: boolean;
  contacts: ContactsType;
};
