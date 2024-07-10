import { filterProductController, FilterProductStore } from "@/shared/service/filter-product";
import { SearchInputSvg } from "@/shared/svg/SearchInputSvg";
import { SortingSvg } from "@/shared/svg/sorting-btn/SortingSvg";

import styles from "./CatalogSearchLine.module.scss";


const CatalogSearchLine = () => {
  const filterSearchValue = FilterProductStore(store => store.searchValue);

  const handleChangeValue = (value: string) => filterProductController.changeSearchInput(value);

  return (
    <div className={styles.sortingLine}>
    <SortingSvg />
    <div className={styles.inputWrapper}>
      <div className={styles.searchIconContainer}>
        <SearchInputSvg />
      </div>
      <input
        placeholder="Искать товар..."
        type="text"
        className={styles.searchInput}
        value={filterSearchValue}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </div>
  </div>
  );
};

export  {CatalogSearchLine};