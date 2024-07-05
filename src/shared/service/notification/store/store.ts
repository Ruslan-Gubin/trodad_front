import { createStore } from "../../create-store";
import type { NotificationInitState } from "../types";


const initState: NotificationInitState = {
  notificationList: [],
  timeOut: 3,
};


export const notificationStore = createStore({
  initState,
});



