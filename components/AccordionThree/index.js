import React, { useState } from "react";
import data from "../../data/accordion";

import styles from "./AccordionThree.module.css";

export default function AccordionThree() {
  // https://www.youtube.com/watch?v=bGpZrr32ECw

  const [selected, setSelected] = useState(null);

  function toggle(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className={styles.accordion}>
      {data.map((item, i) => {
        return (
          <div className={styles.item} key={i}>
            <div className={styles.title} onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div
              className={`${styles.content} ${
                selected === i ? styles.show : null
              }`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// const data = [
//   {
//     question: "Question 1",
//     answer:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ut in eos at non, unde laborum commodi dolore. Cupiditate minima unde aperiam nemo, culpa sed dolorum porro enim ullam illum?",
//   },
//   {
//     question: "Question 2",
//     answer:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ut in eos at non, unde laborum commodi dolore. Cupiditate minima unde aperiam nemo, culpa sed dolorum porro enim ullam illum?",
//   },
//   {
//     question: "Question 3",
//     answer:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ut in eos at non, unde laborum commodi dolore. Cupiditate minima unde aperiam nemo, culpa sed dolorum porro enim ullam illum?",
//   },
//   {
//     question: "Question 4",
//     answer:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ut in eos at non, unde laborum commodi dolore. Cupiditate minima unde aperiam nemo, culpa sed dolorum porro enim ullam illum?",
//   },
// ];
