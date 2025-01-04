import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-md text-gray-500 mb-6">
          Please sign in or register to access this page.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/sign-in"
            className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
