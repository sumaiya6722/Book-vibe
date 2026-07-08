// import React from "react";
import { Link } from "react-router";




const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center p-8 rounded-2xl shadow-xl bg-base-100 max-w-md">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-error">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn`t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-primary mt-6">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Errorpage;