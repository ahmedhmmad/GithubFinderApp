import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "./../../../node_modules/react-icons/fa/index.esm";

function Notfound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl">Oops!</h1>
          <p className="text-5xl mb-8">404- Not Found!</p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
