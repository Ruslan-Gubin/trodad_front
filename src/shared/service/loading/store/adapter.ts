import { loadingStore } from "./store";

export class LoadingAdapter {
  isOpen: boolean = false;
  constructor() {}

  public setFethLoading() {
    return loadingStore.setState({ fetchloading: true });
  }

  public resetFethLoading() {
    return loadingStore.setState({ fetchloading: false });
  }

  public setSubmitLoading() {
    return loadingStore.setState({ submitLoading: true });
  }

  public resetSubmitLoading() {
    return loadingStore.setState({ submitLoading: false });
  }

}
