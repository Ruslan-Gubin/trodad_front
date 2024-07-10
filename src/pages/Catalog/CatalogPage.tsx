import { SortingSvg } from "@/shared/svg/sorting-btn/SortingSvg";
import { SearchInputSvg } from "@/shared/svg/SearchInputSvg";
import { CatalogList } from "@/widgets/catalog/catalog-list/CatalogList";
import { CatalogFilters } from "@/widgets/catalog/catalog-filters/CatalogFilters";
import { Pagination } from "@/shared/ui/pagination";

import styles from "./CatalogPage.module.scss";

const CatalogPage = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Каталог Trodat</h1>

        <div className={styles.titleLine}></div>

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
            />
          </div>
        </div>

        <div className={styles.content}>
          <CatalogFilters />
          <CatalogList />
        </div>

        <div className={styles.paginationWrapper}>
          <Pagination
            className={styles.pagination}
            clickNumber={() => {}}
            countPerPage={12}
            currentPage={1}
            nextPage={() => {}}
            prevPage={() => {}}
            totalCount={120}
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
