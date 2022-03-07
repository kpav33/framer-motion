import React from "react";

import styles from "./AccordionItem.module.scss";
import styles1 from "../Accordion/Accordion.module.scss";

export default function AccordionItem({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) {
  return (
    <div className={styles1.faq__question} key={item.question}>
      <dt>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__question-button"
          //   className={`faq__question-button ${fontWeightBold}`}
          className={`${styles1.faq__questionButton} ${fontWeightBold}`}
          onClick={onClick}
        >
          {item.question}
        </button>
      </dt>
      <dd>
        <p
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
          className={`${styles1.faq__desc} ${showDescription}`}
        >
          {item.answer}
        </p>
      </dd>
    </div>
  );
}
