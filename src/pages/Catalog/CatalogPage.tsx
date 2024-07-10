import { useEffect, useState } from "react";
import { CatalogList } from "@/widgets/catalog/catalog-list/CatalogList";
import { CatalogFilters } from "@/widgets/catalog/catalog-filters/CatalogFilters";
import { Pagination } from "@/shared/ui/pagination";
import { fetchService } from "@/shared";
import { loadingController } from "@/shared/service/loading";
import type { ProductModel } from "@/shared/types/ProductsType";
import type { CategoryModel } from "@/shared/types/CategoryType";
import { filterProductController, FilterProductStore } from "@/shared/service/filter-product";
import { CatalogSearchLine } from "@/widgets/catalog/catalog-search-line/CatalogSearchLine";
import { debounce } from "@/shared/helpers/debounce";
import { CatalogPagination } from "@/widgets/catalog/catalog-pagination/CatalogPagination";

import styles from "./CatalogPage.module.scss";


const CatalogPage = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [categoryes, setCategoryes] = useState<CategoryModel[]>([]);
  const filters = FilterProductStore((store) => store);

  const loadProducts = () => {
    loadingController.activeFetchLoading();

    const params = {
      minPrice: String(filters.priceMinValue),
      maxPrice: String(filters.priceMaxValue),
      minDiameter: String(filters.diameterMinValue),
      maxDiameter: String(filters.diameterMaxValue),
      currentPage: String(filters.currentPage),
      perPage: String(12),
    };

    if (filters.searchValue) {
      //@ts-ignore
      params.searchTitle = filters.searchValue;
    }
    if (filters.categoryIds.length > 0) {
      //@ts-ignore
      params.categoryes = filters.categoryIds;
    }


    fetchService
      .get({ url: "products/frontend", params })
      .then((response) => {
        if (response.status === 'success' && response.data) {
          setProducts(response.data);
          if (response.totalCount && !filters.totalCountProduct) {
            filterProductController.setTotalCount(response.totalCount)
          }
        }
      })
      .catch((error) => console.log(error))
      .finally(() => loadingController.resetFethLoading());
  };

  const loadCategory = () => {
    loadingController.activeFetchLoading();

    fetchService
      .get({ url: "category" })
      .then((response) => {
        if (response.length > 0) {
          setCategoryes(response);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => loadingController.resetFethLoading());
  };

  useEffect(() => {
    loadProducts();
    loadCategory();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

      timer = setTimeout(() => { 
        loadProducts()
      }, 400);

      return() => {
        clearTimeout(timer);
      }
  
  },[filters])

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Каталог Trodat</h1>
        <div className={styles.titleLine}></div>
        <CatalogSearchLine />
        <div className={styles.content}>
          <CatalogFilters categorys={categoryes} />
          <CatalogList products={products} />
        </div>
        <CatalogPagination />
      </div>
    </section>
  );
};

export default CatalogPage;
