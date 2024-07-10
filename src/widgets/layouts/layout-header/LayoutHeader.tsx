import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLogo from "../../../../public/assets/images/header-logo.png";
import BurgerSvg from "../../../../public/assets/svg/iconamoon_menu-burger-horizontal-light.svg";
import YoutubePng from "../../../../public/assets/images/youtube-large.png";
import VkPng from "../../../../public/assets/images/vk-large.png";
import InstPng from "../../../../public/assets/images/inst-large.png";
import FacebookPng from "../../../../public/assets/images/facebook-large.png";
import BurgerClose from "../../../../public/assets/svg/bitcoin-icons_cross-outline.svg";
import MenuRectPng from "../../../../public/assets/images/menu-rect-large.png";
import { Container } from "@/shared/ui/container/Container";
import { getFormatPhone } from "@/shared/helpers/formattedPhone";
import { layoutStore } from "@/shared";


import styles from "./LayoutHeader.module.scss";
import LogoSvg from "./LogoSvg";
import SearchSvg from "./SearchSvg";
import { ProfileSvg } from "./Profile";
import { BasketSvg } from "./BasketSvg";

const navList = [
  { patch: "/", title: "Главная" },
  { patch: "/catalog", title: "Каталог" },
  { patch: "/#reviews", title: "О компании" },
  { patch: "/#contacts", title: "Акции" },
  { patch: "/#contacts", title: "Новости" },
  { patch: "/#contacts", title: "Контакты" },
];


const LayoutHeader = () => {
  const contacts = layoutStore(state => state.contacts);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = (value: boolean) => setIsMenuOpen(() => value);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <section className={styles.headerContent}>
            <Link to={"/"} onClick={() => window && window.scrollTo(0, 0)}>
            <LogoSvg/>
            </Link>
            <nav>
              <ul className={styles.navList}>
                {navList.map((item) => (
                  <li key={item.title}>
                    <Link to={item.patch} className={styles.navLink} >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {!isMenuOpen ? (
                <BurgerSvg
                  onClick={() => handleToggleMenu(true)}
                  className={styles.buregerSvg}
                />
              ) : (
                <BurgerClose
                  onClick={() => handleToggleMenu(false)}
                  className={styles.buregerSvg}
                />
              )}
            </nav>

            <section className={styles.leftSideList}>
              <SearchSvg />
              <ProfileSvg />
              <BasketSvg />

            </section>
          </section>
        </Container>
      </header>

      <section
        className={
          isMenuOpen
            ? `${styles.mobileMenu} ${styles.mobileMenuOpen}`
            : styles.mobileMenu
        }
      >
        <div className={styles.menuContent}>
          <nav>
            <ul className={styles.navMenuList}>
              {navList.map((item) => (
                <li key={item.title} onClick={() => handleToggleMenu(false)}>
                  <a className={styles.navLinkMenu} href={`${item.patch}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className={styles.contactsList}>
            <a href={`tel:+${contacts.phone}`} className={styles.contectItem}>
              {`+${getFormatPhone(contacts.phone)}`}
            </a>
            <a href={`mailto:${contacts.email}`} className={styles.contectItem}>
              {contacts.email}
            </a>
            <ul className={styles.socialLinkList}>
              <li className={styles.socialLinkListItem}>
              <Link to={`${contacts.contactYoutube}`} target="_blank">
                <img src={YoutubePng} alt="Youtube Png" />
                </Link>
              </li>
              <li className={styles.socialLinkListItem}>
              <Link to={`${contacts.contactVk}`} target="_blank">
                <img src={VkPng} alt="VK Png" />
                </Link>
              </li>
              <li className={styles.socialLinkListItem}>
              <Link to={`${contacts.contactInst}`} target="_blank">
                <img src={InstPng} alt="Inst Png" />
                </Link>
              </li>
              <li className={styles.socialLinkListItem}>
              <Link to={`${contacts.contactFacebook}`} target="_blank">
                <img src={FacebookPng} alt="Facebook Png" />
                </Link>
              </li>
            </ul>
          </ul>
          <img
            className={styles.menuRectSmall}
            src={MenuRectPng}
            alt="Menu rect small"
          />
          <img
            className={styles.menuRectMedium}
            src={MenuRectPng}
            alt="Menu rect medium"
          />
          <img
            className={styles.menuRectLarge}
            src={MenuRectPng}
            alt="Menu rect large"
          />
        </div>
      </section>
    </>
  );
};

export { LayoutHeader };
