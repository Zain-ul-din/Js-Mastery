import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootElement:Element = document.querySelector("#root") as Element;
const root:ReactDOM.Root = ReactDOM.createRoot(rootElement as Element);

root.render(<App/>);

