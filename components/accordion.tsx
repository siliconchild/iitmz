"use client";
import styles from "./accordion.module.scss";
import {
  ControlledAccordion, // if you wish to use the Controlled version
  AccordionItem as ReactAccordionItem,
  useAccordionProvider,
} from "@szhsin/react-accordion";
import { ReactElement, ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { TbLayoutNavbarExpand, TbLayoutBottombarExpand } from "react-icons/tb";

type AccordionProps = {
  children: ReactNode,
  title: string
}

type AccordionItemProps = {
  children: ReactElement[];
  initialEntered?: boolean;
};

const Accordion = ({ children, title }: AccordionProps) => {
  const providerValue = useAccordionProvider({
    allowMultiple: true,
    transition: true,
    transitionTimeout: 250,
  });
  const { toggleAll } = providerValue;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className={styles.titleheader}>
        <h4>{title}</h4>
        <button
          onClick={() => {
            toggleAll(!isExpanded);
            setIsExpanded((prevState) => !prevState);
          }}
        >
          {isExpanded ? (
            <>
              <TbLayoutBottombarExpand />
              Collapse All
            </>
          ) : (
            <>
              <TbLayoutNavbarExpand />
              Expand All
            </>
          )}
        </button>
      </div>
      <ControlledAccordion
        providerValue={providerValue}
        className={styles.accordion}
      >
        {children}
      </ControlledAccordion>
    </>
  );
};

const AccordionItem = ({ children, ...props }: AccordionItemProps) => {
  const [header, body] = children;
  return (
    <ReactAccordionItem
      className={styles.item}
      header={() => (
        <div className={styles.header}>
          <FiChevronDown />
          {header}
        </div>
      )}
      {...props}
      buttonProps={{
        className: ({ isEnter }) => `${isEnter && styles.itemBtnExpanded}`,
      }}
    >
      <div className={styles.body}>{body}</div>
    </ReactAccordionItem>
  );
};

export { Accordion, AccordionItem };
