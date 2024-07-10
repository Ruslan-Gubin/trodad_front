import { LayoutAdapter } from "../store/adapter";
import type { ContactsType } from "../types";

export class LayoutController {
  layoutAdapter: LayoutAdapter;
  constructor() {
    this.layoutAdapter = new LayoutAdapter();
  }

  public activeSideMenu() {
    return this.layoutAdapter.setSideMenuOpen();
  }

  public hideSideMenu() {
    return this.layoutAdapter.setSideMenuClose();
  }

  public setContacts(contacts: ContactsType) {
    return this.layoutAdapter.setInitContacts(contacts);
  }

  public updateLike(id: string) {
    return this.layoutAdapter.updateLike(id);
  }

}

export const layoutController = new LayoutController();
