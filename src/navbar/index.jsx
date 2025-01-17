import * as React from "react";
import { Link } from "react-router-dom";
import logoImage from "./logo.webp";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <img src={logoImage} alt="Logo" className="w-16 h-16" />
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <Link to="/laptops" className="hover:text-blue-500 font-medium">
          Laptops
        </Link>
        <Link to="/tablets" className="hover:text-blue-500 font-medium">
          Tablets
        </Link>
      </div>
    </div>
  );
}
