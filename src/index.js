import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Welcome from "./components/pages/welcome/welcome";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Welcome />
  </StrictMode>,
  rootElement
);
