import { createStore } from "../../create-store";
import type { FilterProductInitState } from "../types";


const initState: FilterProductInitState = {
  categoryIds: [],
  currentPage: 1,
  diameterMinValue: 10,
  diameterMaxValue: 100,
  priceMaxValue: 4500,
  priceMinValue: 250,
  searchValue: '',
  totalCountProduct: null,
};

export const FilterProductStore = createStore({
  initState,
});
