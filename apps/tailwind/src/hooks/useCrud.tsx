import React, { useState } from "react";

export function useCrud<T>(
  initialElement: Array<T> = []
): [
  Array<T>,
  React.Dispatch<React.SetStateAction<T[]>>,
  (element: T) => void,
  (idx: number) => void
] {
  const [arr, setArray] = useState<Array<T>>(initialElement);

  const add = (element: T): void => setArray([element, ...arr]);
  const remove = (idx: number): void => {
    arr?.splice(idx, 1);
  };

  return [arr, setArray, add, remove];
}


