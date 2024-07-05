import { useState, useEffect } from "react";
import { fetchService } from "@/shared";
import { NewsArrowSvg } from "./NewsArrowSvg";
import { NewsModel } from "./news-type";

import styles from "./HomeContactBlock.module.scss";


const HomeContactBlock = () => {
  const [newsList, setNewsList] = useState<NewsModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchService
      .get({ url: "news" })
      .then((response) => {
        if (response.status === 'success') {
          setNewsList(response.data)
        } else {
          throw(response.message)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;


  return (
    <>
      <section className={styles.root}>
        <div className={styles.container}>
          <h1 className={styles.title}>Новости</h1>
          <p className={styles.text}>
            Мы предлагаем полный комплекс диагностических, лечебных,
            эстетических и хирургических стоматологических услуг.
          </p>
          <div className={styles.borderHr}></div>

          <ul className={styles.newsList}>
            {newsList.map(news =>
            <li key={news._id} className={styles.newsItem}>
              <img
                className={styles.newsItemImg}
                src={`http://localhost:8080/uploads/${news.image}`}
                alt="News Img"
                />
              <div className={styles.newsItemContent}>
                <h2 className={styles.newsItemTitle}>
                  {news.title}
                </h2>
                <button className={styles.newsButton}>{news.type === 'news' ? 'новость' : 'акция'}</button>
                <div className={styles.newsFooterLink}>
                  <p className={styles.newsLinkText}>Подробнее</p>
                  <div className={styles.newsArrow}>
                    <NewsArrowSvg />
                  </div>
                </div>
              </div>
            </li>
              )}
          </ul>

          <footer className={styles.footerCard}>
            <button className={styles.footerButton}>Посмотреть все</button>
          </footer>
        </div>
      </section>
    </>
  );
};

export { HomeContactBlock };
