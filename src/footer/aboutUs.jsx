import * as React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="flex flex-row mt-6 mb-20 justify-between">
      <div className="flex flex-col content-center text-left me-12 ">
        <h2 className="font-bold text-2xl">About Us</h2>
        <p className="text-lg text-gray-700 text-center ">
          We are a company that values our customers and we strive to provide
          the best service possible.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2"
        >
          <Link to="/about">Learn More</Link>
        </button>
      </div>
    </div>
  );
}
