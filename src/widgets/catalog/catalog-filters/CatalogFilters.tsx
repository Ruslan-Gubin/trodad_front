import { useState } from "react";
import { CategoryCheckSvg } from "@/shared/svg/CategoryCheckSvg";
import { MultiRange } from "@/shared/ui/multi-range/MultiRange";

import styles from "./CatalogFilters.module.scss";

const mockCategory = ['Круглые печати', 'Прямоугольные печати', 'Квадратные штампы', 'Нумераторы', 'Карманные штампы', 'Датеры', 'Овальные печати', 'Серия оснасток Professional', 'Самонаборные печати и штампы', 'Сургучная печать', 'Штемпельные подушки', 'Краска для штампов и печатей', 'Расходные материалы', 'Авторучки со штампом Goldring']


const CatalogFilters = () => {
  const [checkedList, setCheckedLis] = useState<string[]>([]);
  const [priceRangeFirstValue, setPriceRangeFirstValue] = useState<number>(250);
  const [priceRangeSecondValue, setPriceRangeSecondValue] = useState<number>(4500);

  const [diameterRangeFirstValue, setDiameterRangeFirstValue] = useState<number>(20);
  const [diameterRangeSecondValue, setDiameterRangeSecondValue] = useState<number>(100);

  const handleClickChecked = (category: string) => {
    const checkCatogory = checkedList.includes(category);
    if (!checkCatogory) {
      setCheckedLis(prev => ([...prev, category]));
    } else {
      setCheckedLis(prev => prev.filter(item => item !== category));
    }
  }

  const handleChangePriceFirsRange = (e: any) => {
    if (e.target.value >= priceRangeSecondValue - 250) {
      setPriceRangeSecondValue(Number(e.target.value) + 250)
    };
    setPriceRangeFirstValue(e.target.value);
  }

  const handleChangePriceSecondRange = (e: any) => {
    if (e.target.value <= priceRangeFirstValue + 250) {
      setPriceRangeFirstValue(Number(e.target.value) - 250)
    };
    setPriceRangeSecondValue(e.target.value);
  }

  const handleChangeDiameterFirsRange = (e: any) => {
    if (e.target.value >= diameterRangeSecondValue - 5) {
      setDiameterRangeSecondValue(Number(e.target.value) + 5)
    };
    setDiameterRangeFirstValue(e.target.value);
  }

  const handleChangeDiameterSecondRange = (e: any) => {
    if (e.target.value <= diameterRangeFirstValue + 5) {
      setDiameterRangeFirstValue(Number(e.target.value) - 5)
    };
    setDiameterRangeSecondValue(e.target.value);
  }

  
  return (
    <section className={styles.root}>

    <div className={styles.rangeList}>
    <MultiRange 
    step={50}
    max={6000}
    min={250}
    firstValeu={priceRangeFirstValue}
    secondValeu={priceRangeSecondValue}
    changeFirstValue={handleChangePriceFirsRange}
    changeSecondValue={handleChangePriceSecondRange}
    title="По ценам"
    measurement="c"
    />
    <MultiRange 
    step={1}
    max={150}
    min={10}
    firstValeu={diameterRangeFirstValue}
    secondValeu={diameterRangeSecondValue}
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
      {mockCategory.map(item => 
      <li key={item} className={styles.categoryItem} onClick={() => handleClickChecked(item)}>
        <CategoryCheckSvg active={checkedList.includes(item)} />
        <p className={styles.categoryName}>{item}</p>
      </li>
      )}
    </ul>
    </section>
  );
};

export { CatalogFilters };

