import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./App.module.scss";
import * as serviceWorker from "./serviceWorker";

const transcriber = document.createElement("div");
document.body.appendChild(transcriber);
ReactDOM.render(<App {...window.transcriberData} />, transcriber);

if (!window.mw.user.options.get("proofreadpage-horizontal-layout")) {
  const switchLayout = document.querySelector(".oo-ui-icon-switchLayout");
  if (switchLayout) {
    switchLayout.click();
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
