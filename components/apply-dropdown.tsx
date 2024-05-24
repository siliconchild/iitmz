"use client";
import styles from "./apply-dropdown.module.scss";
import Link from "next/link";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import buttonStyles from "./button.module.scss";
import courses from "@/data/courses";

export default function ApplyDropdown() {
  return (
    <div className={styles.menu}>
      <Menu
        menuButton={
          <MenuButton className={buttonStyles.button}>Apply Now</MenuButton>
        }
      >
        <MenuItem>
          <Link target="_blank" href={courses.bs.applicationLink}>
            BS in Data Science & AI
          </Link>
        </MenuItem>
        <MenuItem>
          <Link target="_blank" href={courses.mtech.applicationLink}>
            MTech in Data Science & AI
          </Link>
        </MenuItem>
        <MenuItem>
          <Link target="_blank" href={courses.mtech_os.applicationLink}>
          MTech in Ocean Structures
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
