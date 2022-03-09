import React from "react";
import Image from "next/image";

import styles from "./AccordionItemTwo.module.css";

export default function AccordionItemTwo({
  label,
  isCollapsed,
  handleClick,
  children,
}) {
  return (
    <>
      <button
        className={styles.accordionButton}
        onClick={handleClick}
        style={{ backgroundColor: isCollapsed ? "salmon" : "lightgray" }}
      >
        <div>
          {/* <img src="/accordion-img.svg" alt="accordion-open"></img> */}
          <Image
            src={`${
              isCollapsed ? "/accordion-img-2.svg" : "/accordion-img.svg"
            }`}
            alt="accordion-open"
            width="45px"
            height="45px"
          />
        </div>
        {isCollapsed ? label : <strong>{label}</strong>}
      </button>
      <div
        // className={`${isCollapsed ? styles.collapsed : styles.expanded}`}
        aria-expanded={isCollapsed}
      >
        <div
          style={{ maxHeight: isCollapsed ? 0 : "100px" }}
          className={styles.panel}
        >
          {children}
        </div>
      </div>
    </>
  );
}
