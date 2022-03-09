import React, { useState } from "react";
import AccordionItemTwo from "../AccordionItemTwo";

export default function AccordionTwo({ defaultIndex, onItemClick, children }) {
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  function changeItem(itemIndex) {
    if (typeof onItemClick === "function") {
      onItemClick(itemIndex);
    }

    if (itemIndex !== bindIndex) {
      setBindIndex(itemIndex);
    }
  }

  const items = children.filter(
    (item) => item.type.name === "AccordionItemTwo"
  );

  return (
    <div style={{ width: "500px", height: "500px" }}>
      {items.map(({ props }) => (
        <AccordionItemTwo
          key={props.label}
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          //   children={props.children}
        >
          {props.children}
        </AccordionItemTwo>
      ))}
    </div>
  );
}
