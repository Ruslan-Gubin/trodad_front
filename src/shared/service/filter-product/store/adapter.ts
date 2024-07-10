import { FilterProductStore } from "./store";
import type { ContactsType } from "../types";

export class FilterProductAdapter {
  store = FilterProductStore;
  constructor() {}

  public changeSearchInput(value: string) {
    return this.store.setState({ searchValue: value });
  }

  public selectCategory(categotyId: string) {
    if (this.store.getState().categoryIds.includes(categotyId)) {
      return this.store.setState({ categoryIds: this.store.getState().categoryIds.filter(item => item !== categotyId) });
    } else {
      return this.store.setState({ categoryIds: [...this.store.getState().categoryIds, categotyId] });
    }
  }

  public setMinPrice(value: number) {
    const maxPrice = this.store.getState().priceMaxValue;
    const currentMaxPrice = value > maxPrice ? value : maxPrice;

    return this.store.setState({ priceMinValue: value, priceMaxValue: currentMaxPrice  });
  }

  public setMAxPrice(value: number) {
    const minPrice = this.store.getState().priceMinValue;
    const currentMin = value < minPrice ? value : minPrice;

    return this.store.setState({ priceMaxValue: value, priceMinValue: currentMin });
  }

  public setMinDiameter(value: number) {
    const max = this.store.getState().diameterMaxValue;
    const currentMax = value > max ? value : max;

    return this.store.setState({ diameterMinValue: value, diameterMaxValue: currentMax });
  }

  public setMAxDiameter(value: number) {
    const min = this.store.getState().diameterMinValue;
    const currentMin = value < min ? value : min;

    return this.store.setState({ diameterMaxValue: value, diameterMinValue: currentMin });
  }

  public setTotalCount(value: number) {
    return this.store.setState({ totalCountProduct: value });
  }

  public setCurrentPage(value: number) {
    return this.store.setState({ currentPage: value });
  }
  
}
