import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "PRIMARY" | "SECONDARY" | "SECONDARY_BLACK";
}

export default function Button({ children, kind = "PRIMARY" }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${kind === "SECONDARY" && styles.secondary} ${kind === "SECONDARY_BLACK" && styles.secondaryBlack}`}
    >
      {children}
    </button>
  );
}
