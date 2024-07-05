import { createStore } from "../../create-store";
import type { LoadingInitState } from "../types";

const initState: LoadingInitState = {
  fetchloading: false,
  submitLoading: false,
};

export const loadingStore = createStore({
  initState,
});
