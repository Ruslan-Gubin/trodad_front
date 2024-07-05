import { memo } from "react";
import { ArrowBirdSvg } from "@/shared/svg/ArrowBirdSvg";
import type { MenuDesingModel } from "@/shared/constants/menu-side-bar";
import type { SvgIconProps } from "@/shared/types/svgIconComponsets";

import styles from "./MenuItem.module.scss";

type Props = {
  onClicNavChildren: (href: string) => void;
  href?: string;
  title: string;
  activePath: string;
  icon: SvgIconProps;
  list?: MenuDesingModel[];
  isOpen?: boolean;
  onClick: ({
    value,
    path,
  }: {
    value: string;
    path: string | undefined;
  }) => void;
};

const MenuItem = memo(
  ({
    onClicNavChildren,
    activePath,
    icon: Icon,
    title,
    onClick,
    isOpen,
    href,
    list,
  }: Props) => {
    return (
      <>
        <li
          onClick={() => onClick({ value: title, path: href })}
          className={
            activePath.includes(String(href))
              ? `${styles.menuItem} ${styles.menuItemActive}`
              : styles.menuItem
          }
        >
          <div className={styles.linkLeftSide}>
            {Icon && 
            <Icon height={18} width={18} />
            }
            {title}
          </div>
          {list && <ArrowBirdSvg direction={!isOpen ? "down" : "up"} />}
        </li>

        {isOpen && list && (
          <ul className={styles.childrenMenuList}>
            {list.map(({ title, href, icon: Icon }) => (
              <li
                key={title}
                onClick={() => onClicNavChildren(href)}
                className={
                  activePath === href
                    ? `${styles.menuItem} ${styles.menuItemActive}`
                    : styles.menuItem
                }
              >
                <div className={styles.linkLeftSide}>
                  <Icon height={18} width={18} />
                  {title}
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
);

export { MenuItem };
