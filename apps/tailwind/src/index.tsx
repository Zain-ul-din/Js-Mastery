import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/index.css";

const root = createRoot(document.querySelector("#root") as Element);
root.render(<App />);
