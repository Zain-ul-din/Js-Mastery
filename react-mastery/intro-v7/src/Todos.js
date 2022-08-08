// import { createElement as e } from "react";
import Todo from "./Todo.js";

const TODOS = ["do some work", "sleep", "coding", "go fast"];

export default function Todos() {
  return (
    <div className="todos">
      {TODOS && TODOS.map((todo, idx) => <Todo name={todo} key={idx} />)}
    </div>
  );
}

/*
return e(
    "div",
    { className: "todos" },
    TODOS.map((todo, idx) => e(Todo, { name: todo, key: idx })) // passing props
  );
*/
