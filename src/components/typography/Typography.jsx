import { createElement } from "react";

export default function Typography({ tagName = "p", style, content, func }) {
  const text = createElement(
    tagName,
    { className: style, onClick: func },
    content
  );
  return text;
}
