import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRectSvg from "../../../public/assets/svg/arrorw-swiper-rect.svg";
import { Container } from "@/shared/ui/container/Container";
import { fetchService, notificationService } from "@/shared";

import styles from "./Agrement.module.scss";

const Agrement = () => {
  const [loadData, setLoadData] = useState(true);
  const navigate = useNavigate();
  const [agrement, setAgrement] = useState("");

  const loadAgrement = () => {
    const url = "document/key/Пользовательское соглашение";
    setLoadData(true);
    fetchService
      .get({ url })
      .then((response: any) => {
        if (response.status === "success" && response.data) {
          setAgrement(response.data.document.data);
        } else {
          throw response.message;
        }
      })
      .catch((error) =>
        notificationService.activeNotification({
          status: "error",
          message: `Ошибка: ${error}`,
        })
      )
      .finally(() => setLoadData(false));
  };

  useEffect(() => {
    loadAgrement();
  }, []);

  function createMarkup() {
    return { __html: agrement };
  }

  return (
    <>
      {!loadData && (
        <section className={styles.root}>
          <Container>
            <button className={styles.buttonBack} onClick={() => navigate(-1)}>
              <ArrowRectSvg className={styles.backArrow} />
              Назад
            </button>
            {/* <h1 className={styles.atreementTitle}>Пользовательское соглашение</h1> */}
            <div
              className={styles.document}
              dangerouslySetInnerHTML={createMarkup()}
            />
          </Container>
        </section>
      )}
    </>
  );
};

export default Agrement;
