import UsersSvg from "../../../public/assets/svg/users-svgrepo-com.svg";
import FeedbackSvg from "../../../public/assets/svg/messages-side-menu.svg";
import MailSvg from "../../../public/assets/svg/mail-svgrepo-com.svg";
import TemplateSvg from "../../../public/assets/svg/template-svgrepo-com.svg";
import HistorySvg from "../../../public/assets/svg/history-svgrepo-com.svg";
import SettingSvg from "../../../public/assets/svg/settings-2-svgrepo-com.svg";
import SettingOptionSvg from "../../../public/assets/svg/settings-menu-option.svg";
import AddressMenuOptionSvg from "../../../public/assets/svg/address-menu-settings.svg";
import KeySvg from "../../../public/assets/svg/key-svgrepo-com.svg";
import MonitorSvg from "../../../public/assets/svg/monitor-svgrepo-com.svg";
import ErrorSvg from "../../../public/assets/svg/error-16-svgrepo-com.svg";
import EventSvg from "../../../public/assets/svg/events-svgrepo-com.svg";
import SystemSvg from "../../../public/assets/svg/system-expired-line-svgrepo-com.svg";
import SystemSettingsSvg from "../../../public/assets/svg/settings-general.svg";
import SystemLogsSvg from "../../../public/assets/svg/code-tech-dev-svgrepo-com.svg";
import SystemUpdateSvg from "../../../public/assets/svg/update-svgrepo-com.svg";
import DashboardSvg from "../../../public/assets/svg/dashboard-svgrepo-com.svg";
import LanguagesSvg from "../../../public/assets/svg/languages-side-menu.svg";
import type { SvgIconProps } from "../types/svgIconComponsets";
//------------Template-----------------
import ItemsSvg from "../../../public/assets/svg/item-side-menu.svg";
import RegionsSvg from "../../../public/assets/svg/regions-side-menu.svg";
import CategorySvg from "../../../public/assets/svg/category-side-menu.svg";
import ReviewsSvg from "../../../public/assets/svg/reviews-side-menu.svg";
import PrivacySvg from "../../../public/assets/svg/shield-user-svgrepo-com.svg";
import PoliticSvg from "../../../public/assets/svg/privacy-side-menu.svg";
import BonusSvg from "../../../public/assets/svg/bonus-side-menu.svg";
import BannerSvg from "../../../public/assets/svg/baner-side-menu.svg";
import OrderSvg from "../../../public/assets/svg/order-side-menu.svg";
import ManagerSvg from "../../../public/assets/svg/manager-side-menu.svg";
import UserSvg from "../../../public/assets/svg/users-people-svgrepo-com.svg";
import DocumentsSvg from "../../../public/assets/svg/documents-svgrepo-com.svg";

export type MenuDesingModel = {
  href: string;
  icon: SvgIconProps;
  title: string;
};

type MenuSystemModel = {
  href?: string;
  icon: SvgIconProps;
  title: string;
  list?: MenuDesingModel[];
};

export const menuSystem: MenuSystemModel[] = [
  {
    href: "/dashboard",
    icon: DashboardSvg,
    title: "Дашборд",
  },

  {
    icon: UserSvg,
    title: "Пользователи",
    list: [
      {
        href: "/users",
        icon: UsersSvg,
        title: "Пользователи",
      },
      {
        href: "/managers",
        icon: ManagerSvg,
        title: "Менеджеры",
      },
    ],
  },

  {
    icon: ItemsSvg,
    title: "Товары и Категории",
    list: [
      {
        href: "/items",
        icon: ItemsSvg,
        title: "Товары",
      },
      {
        href: "/category",
        icon: CategorySvg,
        title: "Категории",
      },
      {
        href: "/regions",
        icon: RegionsSvg,
        title: "Регионы",
      },
    ],
  },

  {
    icon: OrderSvg,
    title: "Заказы и Отзывы",
    list: [
      {
        href: "/orders",
        icon: OrderSvg,
        title: "Заказы",
      },
      {
        href: "/reviews",
        icon: ReviewsSvg,
        title: "Отзывы",
      },
      {
        href: "/feedbacks",
        icon: FeedbackSvg,
        title: "Обратная связь",
      },
    ],
  },

  {
    icon: BonusSvg,
    title: "Баннеры",
    href: '/banners'
    // list: [
    //   {
    //     href: "/bonuses",
    //     icon: BonusSvg,
    //     title: "Бонусы",
    //   },
    //   {
    //     href: "/banners",
    //     icon: BannerSvg,
    //     title: "Баннеры",
    //   },
    // ],
  },
  // {
  //   icon: BonusSvg,
  //   title: "Бонусы и Баннеры",
  //   list: [
  //     {
  //       href: "/bonuses",
  //       icon: BonusSvg,
  //       title: "Бонусы",
  //     },
  //     {
  //       href: "/banners",
  //       icon: BannerSvg,
  //       title: "Баннеры",
  //     },
  //   ],
  // },
  {
    icon: MailSvg,
    title: "Почта",
    list: [
      {
        href: "/email-history",
        icon: HistorySvg,
        title: "История",
      },
      {
        href: "/email-templates",
        icon: TemplateSvg,
        title: "Шаблоны",
      },
      {
        href: "/email/smtp",
        icon: SettingOptionSvg,
        title: "SMTP",
      },
    ],
  },
  {
    icon: SettingSvg,
    title: "Настройки",
    list: [
      {
        href: "/documents",
        icon: DocumentsSvg,
        title: "Документы",
      },
      {
        href: "/settings",
        icon: AddressMenuOptionSvg,
        title: "Адрес",
      },
      {
        href: "/language/list",
        icon: LanguagesSvg,
        title: "Языки",
      },
      {
        href: "/configuration/keys",
        icon: KeySvg,
        title: "Конфигуратор ключей",
      },
    ],
  },
  {
    icon: MonitorSvg,
    title: "Работа приложения",
    list: [
      {
        href: "/app-logs",
        icon: ErrorSvg,
        title: "Логи приложения",
      },
      {
        href: "/logs",
        icon: SystemLogsSvg,
        title: "Все логи",
      },
      {
        href: "/events",
        icon: EventSvg,
        title: "События",
      },
    ],
  },
  {
    icon: SystemSvg,
    title: "Система",
    list: [
      {
        href: "/common-settings",
        icon: SystemSettingsSvg,
        title: "Общие настройки",
      },
      {
        href: "/update-system",
        icon: SystemUpdateSvg,
        title: "Обновление системы",
      },
    ],
  },
];
