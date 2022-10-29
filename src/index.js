import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "semantic-ui-css/semantic.min.css";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
