import { LoadingAdapter } from "../store/adapter";

export class LoadingController {
  loadingAdapter: LoadingAdapter;
  constructor() {
    this.loadingAdapter = new LoadingAdapter();
  }

  public activeFetchLoading() {
    return this.loadingAdapter.setFethLoading();
  }

  public resetFethLoading() {
    return this.loadingAdapter.resetFethLoading();
  }

  public activeSubmitLoading() {
    return this.loadingAdapter.setSubmitLoading();
  }

  public resetSubmitLoading() {
    return this.loadingAdapter.resetSubmitLoading();
  }
}

export const loadingController = new LoadingController();
