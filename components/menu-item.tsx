"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./menu-item.module.scss";
import Dropdown from "./menu-dropdown";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import { useRouter } from "next/navigation";

export type MenuItemType = {
  title: string;
  link: string;
  submenus?: MenuItemType[];
};

type MenuItemProps = {
  item: MenuItemType;
  depthLevel: number;
  kind: "HEADER" | "FOOTER";
};

export default function MenuItem({ item, depthLevel, kind }: MenuItemProps) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<HTMLLIElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = (event: Event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        ${styles.menu_item} 
        ${depthLevel > 0 && styles.nested} 
        ${kind === "FOOTER" && styles.footer} `}
    >
      {item.submenus ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            onClick={() => {
              if (window.innerWidth > 960) {
                router.push(item.link);
              } else {
                depthLevel < 1
                  ? setDropdown((prev) => !prev)
                  : router.push(item.link);
              }
            }}
          >
            {item.title}{" "}
            {depthLevel > 0 ? (
              <AiOutlineArrowRight />
            ) : (
              <BiCaretDown
                className={`${styles.caret} ${dropdown && styles.arrow_open}`}
              />
            )}
          </button>
          <Dropdown
            kind={kind}
            submenus={item.submenus}
            show={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <a href={item.link}>{item.title}</a>
      )}
    </li>
  );
}
