import React, { useEffect } from "react";

export default function App() : JSX.Element {
  useEffect((): void => {
    console.log(
      process.env.REACT_APP_MYAPI_KEY,
      process.env.REACT_APP_MY_APIS_KEY
    );
  }, []);

  return <>React App</>;
}
