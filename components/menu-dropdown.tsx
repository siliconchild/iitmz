import styles from "./menu-dropdown.module.scss";
import MenuItem, { MenuItemType } from "./menu-item";

type MenuDropdownProps = {
  submenus: MenuItemType[];
  show: boolean;
  depthLevel: number;
  kind: "HEADER" | "FOOTER";
};

export default function MenuDropdown({
  submenus,
  show,
  depthLevel,
  kind,
}: MenuDropdownProps) {
  depthLevel = depthLevel + 1;
  return (
    <ul
      className={`
        ${styles.menu_dropdown} 
        ${show && styles.show} 
        ${depthLevel > 1 && styles.nested} 
        ${kind === "FOOTER" && styles.footer} 
      `}
    >
      {submenus.map((submenu) => (
        <MenuItem
          kind={kind}
          item={submenu}
          key={submenu.link}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
}
