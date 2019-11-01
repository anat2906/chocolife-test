import React from "react";
import ReactDOM from "react-dom";
import "./container/index.css";
import App from "./container/App.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
