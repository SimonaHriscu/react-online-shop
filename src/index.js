import React from "react";
import ReactDOM from "react-dom";
//import 'react-bootstrap';
import "./scss/main.scss";
//import "fontawesome";
import "./components/icons/lib";

import App from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

