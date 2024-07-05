import { createStore } from "../../create-store";
import type { LayoutInitState } from "../types";

const initState: LayoutInitState = {
  sideBarMenuState: false,
  contacts: {
    phone: "",
    email: "",
    contactVk: "",
    contactYoutube: "",
    contactInst: "",
    contactFacebook: "",
    contactAppStore: "",
    contactGooglePlay: "",
  }
};

export const layoutStore = createStore({
  initState,
  persistName: 'layout-store',
});
