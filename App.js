/**
 * <div id="parent">
 *    <div id="child">
 *       <h1>I am an H1 tag</h1>
 *       <h2>I am an H2 tag</h2>
 *    </div>
 * </div>
 */

//How to create Nested structure inside React
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag"),
//   ])
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h2", {}, "This is an H2 of child1"),
//     React.createElement("p", {}, "This is a paragraph of child1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h2", {}, "This is an H2 of child2"),
//     React.createElement("p", {}, "This is a paragraph of child2"),
//   ]),
// ]);
import React from "react";
import ReactDOM from "react-dom/client";

const mainDiv = React.createElement(
  "div",
  { id: "main" },
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h2", {}, "Heading2"),
      React.createElement("p", {}, "Paragraph1"),
    ]),
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("p", { id: "para2" }, "Paragraph2")
    ),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React Universe"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainDiv);
