import * as React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a company that values our customers and we strive to provide the
        best service possible.
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        <Link to="/about">Learn More</Link>
      </button>
    </div>
  );
}
