import { layoutStore } from "./store";
import type { ContactsType } from "../types";

export class LayoutAdapter {
  isOpen: boolean = false;
  constructor() {}

  public setSideMenuOpen() {
    return layoutStore.setState({ sideBarMenuState: true });
  }

  public setSideMenuClose() {
    return layoutStore.setState({ sideBarMenuState: false });
  }

  public setInitContacts(contacts: ContactsType) {
    layoutStore.setState({ contacts })
  }
}
