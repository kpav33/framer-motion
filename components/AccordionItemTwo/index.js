import React from "react";

import styles from "./AccordionItemTwo.module.css";

export default function AccordionItemTwo({
  label,
  isCollapsed,
  handleClick,
  children,
}) {
  return (
    <>
      <button className={styles.accordionButton} onClick={handleClick}>
        {label}
      </button>
      <div
        className={`${isCollapsed ? styles.collapsed : styles.expanded}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
}
