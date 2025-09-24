"use client";

import { useState, ReactNode } from "react";
import styles from "./expand.module.scss";
import Button from "@/components/button";

interface ExpandProps {
  children: ReactNode[] | string;
  previewChars?: number;
  previewItems?: number;
}

export default function Expand({
  children,
  previewChars = 300,
  previewItems = 1,
}: ExpandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (typeof children === "string") {
    const shouldTrim = children.length > previewChars;
    return (
      <div className={styles.expandContainer}>
        {shouldTrim ? (
          <>
            <p className={styles.textRegular}>
              {isExpanded ? children : children.slice(0, previewChars) + "..."}
            </p>

            <Button
              kind="SECONDARY"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          </>
        ) : (
          <p className={styles.textRegular}>{children}</p>
        )}
      </div>
    );
  }
  

  const shouldTrim = children.length > previewItems;

  return (
    <div className={styles.expandContainer}>
      {shouldTrim ? (
        <>
          {isExpanded ? children : children.slice(0, previewItems)}
          <Button
            kind="SECONDARY"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
