import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="mercurius">Oops!</h1>
      <p className="text-xl w-1/2 text-center my-4">
        The page you are looking for might have been removed, has its name
        changed or temporarily unavailable.
      </p>
      <button className="bg-black px-4 py-2 text-white hover:bg-black/80 rounded-lg">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Missing;
