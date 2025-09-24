import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "PRIMARY" | "SECONDARY" | "SECONDARY_BLACK";
  disbaled?: boolean;
}

export default function Button({ children, kind = "PRIMARY", disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button} ${
        kind === "SECONDARY" && styles.secondary
      } ${kind === "SECONDARY_BLACK" && styles.secondaryBlack} ${
        disabled && styles.disabled
      }`}
    >
      {children}
    </button>
  );
}
