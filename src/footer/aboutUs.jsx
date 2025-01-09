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
      <button>
        <Link to="/about">Learn More</Link>
      </button>
    </div>
  );
}
