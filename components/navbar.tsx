import styles from "./navbar.module.scss";
import navMenu from "@/data/navmenu";
import MenuItem from "./menu-item";

type NavbarProps = {
  navToggle: boolean;
  kind: "HEADER" | "FOOTER";
};

export default function Navbar({ navToggle, kind }: NavbarProps) {
  let menuItems = navMenu;
  if (kind === "HEADER") {
    menuItems = navMenu.filter((navMenu) => navMenu.type !== "FOOTER_ONLY");
  }
  return (
    <nav
      className={`${styles.nav} 
        ${navToggle && styles.nav_show}  
        ${kind === "FOOTER" && styles.footer} `}
    >
      <ul>
        {menuItems.map((navItem) => {
          const depthLevel = 0;
          return (
            <MenuItem
              kind={kind}
              item={navItem}
              depthLevel={depthLevel}
              key={navItem.link}
            />
          );
        })}
      </ul>
    </nav>
  );
}
