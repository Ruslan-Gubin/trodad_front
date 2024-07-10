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

  public updateLike(id: string) {
    const likeArr = layoutStore.getState().likesArray;

    if (likeArr.includes(id)) {
      layoutStore.setState({ likesArray: likeArr.filter(item => item !== id) })
    } else {
      layoutStore.setState({ likesArray: [...likeArr, id] })
    }
  }
  
}
