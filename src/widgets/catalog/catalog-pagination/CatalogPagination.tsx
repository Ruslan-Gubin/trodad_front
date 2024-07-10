import { Pagination } from "@/shared/ui/pagination";
import { filterProductController, FilterProductStore } from "@/shared/service/filter-product";

import styles from "./CatalogPagination.module.scss";


const CatalogPagination = () => {
  const totalCount = FilterProductStore(store => store.totalCountProduct);
  const currentPage = FilterProductStore(store => store.currentPage);

  const handleChangePage = (value: number) => filterProductController.setCurrentPage(value);


  return (
    <div className={styles.paginationWrapper}>
    <Pagination
      className={styles.pagination}
      clickNumber={(page) => handleChangePage(page)}
      countPerPage={12}
      currentPage={currentPage}
      nextPage={() => handleChangePage(currentPage + 1)}
      prevPage={() => handleChangePage(currentPage - 1)}
      totalCount={totalCount ? totalCount : 0}
    />
  </div>
  );
};

export  {CatalogPagination};