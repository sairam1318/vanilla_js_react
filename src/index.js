import "./styles.css";
import { createElement, createTextElement, render } from "./utils";

// const textElement = createTextElement("Hello World");
const container = document.getElementById("root");
// const h1Element = {
//   type: "h2",
//   props: {
//     children: [textElement]
//   }
// };
// const h1Element = createElement("h1", undefined, "...Hello world");
// render(h1Element, container);

const React = { createElement };
// console.log(React);
const elem = <h1>Hello</h1>;
// const container = document.getElementById("root");
render(elem, container);
