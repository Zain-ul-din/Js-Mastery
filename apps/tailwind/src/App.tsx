import React, { useEffect } from "react";
import { SignWithGitHub, auth } from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function App(): JSX.Element {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="flex p-5 justify-center align-center w-100 h-100 flex-col items-center">
        <h5 className="text-white text-center text-5xl uppercase antialiased p-10 font-semibold">
          React App
        </h5>
        <button
          className="hover:bg-green-900 shadow-lg border-t-neutral-600 px-2 py-2 focus:outline-4 focus:border-gray-400 focus:border-2 bg-neutral-700 text-white rounded-md"
          onClick={async (e) => {
            const res = await SignWithGitHub();
          }}
        >
          Sign-in With GitHub
        </button>
      </div>
    </>
  );
}
