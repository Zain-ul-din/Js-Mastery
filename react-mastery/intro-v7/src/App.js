// Entry Point
"use strict" 

const e = React.createElement 

const TODOS = ["do some work", "sleep", "coding", "go fast"] 

const Todo = (props) => e("h1", {}, props.name) 

const Todos = () => {
  return e(
    "div",
    { className: "todos" },
    TODOS.map((todo, idx) => e(Todo, { name: todo, key: idx })) // passing props
  ) 
} 

const container = document.querySelector("#root") 
const root = ReactDOM.createRoot(container) 

root.render(
  e("div", {}, [e("button", { key: 0 }, "click me"), e(Todos, { key: 1 })])
) 

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
  
