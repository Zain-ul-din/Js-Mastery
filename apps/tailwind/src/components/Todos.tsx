import React from "react";
import { useCrud } from "../hooks/useCrud";

export default function Todos(): JSX.Element {
  const [todos, setTodos, addTodos, removeTodos] = useCrud<string>();

  console.log(todos);

  return (
    <>
      {todos.map((ele: string): string => {
        return ele;
      })}
    </>
  );
}
