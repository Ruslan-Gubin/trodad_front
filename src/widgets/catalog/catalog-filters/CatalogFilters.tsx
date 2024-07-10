import { CategoryCheckSvg } from "@/shared/svg/CategoryCheckSvg";
import { MultiRange } from "@/shared/ui/multi-range/MultiRange";
import type { CategoryModel } from "@/shared/types/CategoryType";
import { filterProductController, FilterProductStore } from "@/shared/service/filter-product";

import styles from "./CatalogFilters.module.scss";


type Props = {
  categorys: CategoryModel[];
}

const CatalogFilters = ({ categorys }: Props) => {
  const filterCategorys = FilterProductStore(store => store.categoryIds);
  const minPrice = FilterProductStore(store => store.priceMinValue);
  const maxPrice = FilterProductStore(store => store.priceMaxValue);
  const minDiameter = FilterProductStore(store => store.diameterMinValue);
  const maxDiameter = FilterProductStore(store => store.diameterMaxValue);

  const handleSelectCategory = (category: string) => filterProductController.selectCategory(category);


  const handleChangePriceFirsRange = (e: any) => {
    filterProductController.setMinPrice(Number(e.target.value));
  }

  const handleChangePriceSecondRange = (e: any) => {
    filterProductController.setMAxPrice(Number(e.target.value));
  }

  const handleChangeDiameterFirsRange = (e: any) => {
    filterProductController.setMinDiameter(Number(e.target.value));
  }

  const handleChangeDiameterSecondRange = (e: any) => {
    filterProductController.setMAxDiameter(Number(e.target.value));
  }

  
  return (
    <section className={styles.root}>

    <div className={styles.rangeList}>
    <MultiRange 
    step={50}
    max={6000}
    min={250}
    firstValeu={minPrice}
    secondValeu={maxPrice}
    changeFirstValue={handleChangePriceFirsRange}
    changeSecondValue={handleChangePriceSecondRange}
    title="По ценам"
    measurement="c"
    />
    <MultiRange 
    step={1}
    max={150}
    min={10}
    firstValeu={minDiameter}
    secondValeu={maxDiameter}
    changeFirstValue={handleChangeDiameterFirsRange}
    changeSecondValue={handleChangeDiameterSecondRange}
    title="По диаметру (круглые штампы)"
    measurement="мм"
    />
    </div>

    <div className={styles.sizeSettings}>
      <p className={styles.sizeTitle}>По размеру (прямоугольные штампы)</p>
      <div className={styles.settingButtons}>
      <button className={styles.settingBtn}>40 мм</button>
      <div className={styles.settingIncrement}></div>
      <button className={styles.settingBtn}>80 мм</button>
      </div>
    </div>


    <h2 className={styles.categoryTitle}>Категории</h2>
    <ul className={styles.categoryList}>
      {categorys.map(item => 
      <li key={item._id} className={styles.categoryItem} onClick={() => handleSelectCategory(item._id)}>
        <CategoryCheckSvg active={filterCategorys.includes(item._id)} />
        <p className={styles.categoryName}>{item.name}</p>
      </li>
      )}
    </ul>
    </section>
  );
};

export { CatalogFilters };

