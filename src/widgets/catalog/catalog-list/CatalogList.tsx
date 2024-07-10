import { memo } from "react";
import { NoLikeSvg } from "@/shared/svg/NoLikeSvg";
import { LikeSvg } from "@/shared/svg/LikeSvg";
import { BuyProcutSvg } from "@/shared/svg/BuyProcutSvg";
import { layoutController, layoutStore } from "@/shared";
import { loadingStore } from "@/shared/service/loading";
import type { ProductModel } from "@/shared/types/ProductsType";
import mockImg from "../../../../public/assets/images/mockImg.png";

import styles from "./CatalogList.module.scss";
import { CONFIG_APP } from "@/shared/config";

const colorTranslate = {
  красный: "red",
  бирюзовый: "turquoise",
  серый: "grey",
  синий: "blue",
  черный: "black",
  оранжевый: "orange",
};

type Props = {
  products: ProductModel[];
};

const CatalogList =  memo(({ products }: Props) => {
  const likesArr = layoutStore((store) => store.likesArray);
  const loadingProduct = loadingStore((store) => store.fetchloading);

  const handleClickLike = (id: string) => layoutController.updateLike(id);
  const getIncludeLikes = (id: string) => likesArr.includes(id);

  const getColorArray = (productColors: string[]) => {
    const result: string[] = [];
    productColors.forEach((item) => {
      if (Object.hasOwn(colorTranslate, item)) {
        //@ts-ignore
        result.push(colorTranslate[item]);
      }
    });
    return result;
  };

  return (
    <ul
      className={
        loadingProduct
          ? `${styles.catalogList} ${styles.catalogListOpasity}`
          : styles.catalogList
      }
    >
      {products.map((product) => (
        <li key={product._id} className={styles.productItem}>
          <header className={styles.productHeader}>
            <img
              src={product.imagePatch ? `${CONFIG_APP.API_ENDPOINT}${product.imagePatch}` : mockImg}
              alt="Product img"
              className={styles.productImg}
            />
            <div className={styles.codeHeader}>{product.article}</div>
            <div className={styles.headrContainer}>
              {!getIncludeLikes(product._id) ? (
                <button
                  className={styles.likeBtn}
                  onClick={() => handleClickLike(product._id)}
                >
                  <NoLikeSvg />
                </button>
              ) : (
                <button
                  className={styles.likeBtn}
                  onClick={() => handleClickLike(product._id)}
                >
                  <LikeSvg />
                </button>
              )}
            </div>
          </header>
          <div className={styles.content}>
            <h2 className={styles.productTilte}>{product.name}</h2>

            <div className={styles.productDescription}>
              <p className={styles.descriptionTilte}>Размер:{product.size}</p>
              <ul className={styles.colorList}>
                {getColorArray(product.color).map((color) => (
                  <li
                    key={color}
                    className={styles.color}
                    style={{ backgroundColor: color }}
                  ></li>
                ))}
              </ul>
            </div>

            <footer className={styles.footer}>
              <span className={styles.footerCost}>{"3500 с."}</span>

              <BuyProcutSvg />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
});

export { CatalogList };
