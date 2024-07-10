import styles from "./CatalogList.module.scss";
import mockImg from "../../../../public/assets/images/mockImg.png";
import { NoLikeSvg } from "@/shared/svg/NoLikeSvg";
import { LikeSvg } from "@/shared/svg/LikeSvg";
import { ProducColorListSvg } from "@/shared/svg/ProducColorListSvg";
import { BuyProcutSvg } from "@/shared/svg/BuyProcutSvg";
import { layoutController, layoutStore, LocalStorage } from "@/shared";

const mockProductsList = [
  {
    _id: "1",
    img: mockImg,
    title: "Рельефная печать",
    desc: "Размер: Max. 41мм* 24мм",
    price: "3500 с.",
    code: "5200",
  },
  {
    _id: "2",
    img: mockImg,
    title: "Рельефная печать",
    desc: "Размер: Max. 41мм* 24мм",
    price: "3500 с.",
    code: "5200",
  },
  {
    _id: "3",
    img: mockImg,
    title: "Рельефная печать",
    desc: "Размер: Max. 41мм* 24мм",
    price: "3500 с.",
    code: "5200",
  },
  {
    _id: "4",
    img: mockImg,
    title: "Рельефная печать",
    desc: "Размер: Max. 41мм* 24мм",
    price: "3500 с.",
    code: "5200",
  },
  {
    _id: "5",
    img: mockImg,
    title: "Рельефная печать",
    desc: "Размер: Max. 41мм* 24мм",
    price: "3500 с.",
    code: "5200",
  },
];

const CatalogList = () => {
  const likesArr = layoutStore((store) => store.likesArray);

  const handleClickLike = (id: string) => layoutController.updateLike(id);
  const getIncludeLikes = (id: string) => likesArr.includes(id);

  return (
    <ul className={styles.catalogList}>
      {mockProductsList.map((product) => (
        <li key={product._id} className={styles.productItem}>
          <header className={styles.productHeader}>
            <img
              src={product.img}
              alt="Product img"
              className={styles.productImg}
            />
            <div className={styles.codeHeader}>{product.code}</div>
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
            <h2 className={styles.productTilte}>{product.title}</h2>

            <div className={styles.productDescription}>
              <p className={styles.descriptionTilte}>{product.desc}</p>
              <ProducColorListSvg />
            </div>

            <footer className={styles.footer}>
              <span className={styles.footerCost}>{product.price}</span>

              <BuyProcutSvg />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { CatalogList };
