import { FilterProductAdapter } from "../store/adapter";


export class FilterProductController {
 private adapter: FilterProductAdapter;

  constructor() {
    this.adapter = new FilterProductAdapter();
  }

  public changeSearchInput(value:string) {
    return this.adapter.changeSearchInput(value);
  }

  public selectCategory(categotyId: string) {
    return this.adapter.selectCategory(categotyId);
  }

  public setMinPrice(number: number) {
    return this.adapter.setMinPrice(number);
  }

  public setMAxPrice(number: number) {
    return this.adapter.setMAxPrice(number);
  }

  public setMinDiameter(number: number) {
    return this.adapter.setMinDiameter(number);
  }

  public setMAxDiameter(number: number) {
    return this.adapter.setMAxDiameter(number);
  }

  public setTotalCount(number: number) {
    return this.adapter.setTotalCount(number);
  }

  public setCurrentPage(number: number) {
    return this.adapter.setCurrentPage(number);
  }


}

export const filterProductController = new FilterProductController();
