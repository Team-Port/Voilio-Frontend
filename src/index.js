import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "./styles/tailwind.css";

import reportWebVitals from "./reportWebVitals";
import NewApp from "./NewApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    {/* <React.StrictMode> */}
    <NewApp />
    {/* </React.StrictMode> */}
  </RecoilRoot>
);

reportWebVitals();
