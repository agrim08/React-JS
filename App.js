/* PARCEL:
 *
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning Up
 * Dev abd Production Build
 * Super Fast build algo
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with Older version of browser
 * HTTPS on dev
 * Port Number
 * Consisting hashing algo
 * Zero Config
 *
 *
 * Transitive Dependencies
 *
 *
 * BrowerList
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "Parcel OP");
const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
const conatiner = React.createElement(
  "div",
  { id: "conatiner", hello: "world" },
  [heading1, heading2]
);
//this is how we add multiple element using array
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(conatiner);
root.render(conatiner);
