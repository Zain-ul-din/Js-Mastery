// Entry Point
// "use strict";

import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos.js";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

function App() {
  return (
    <>
      <div>
        <button>click ME</button>
        <Todos />
      </div>
    </>
  );
}

root.render(<App />);

//   e("div", {}, [e("button", { key: 0 }, "click me"), e(Todos, { key: 1 })])

/// DOCS

/*
  <!-- ... other HTML ... -->
  <!-- Load React. -->
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <!-- Load our React component. -->


  "use strict" // compile code in strict mode 
  Example :-
    x = 3.14        // This will not cause an error.
  
*/

// rc stand for run command
// npm i -D eslint@8.8.0 eslint-config-prettier@8.3.0
// parcel
// npm i react react-dom  # Setup via npm
// set modules : commonjs | module

// set browserslist : "" => https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
