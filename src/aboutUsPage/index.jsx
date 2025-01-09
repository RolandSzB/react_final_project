import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import aboutImage from "./about.png";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-400 to-emerald-600">
      <h2 className="flex content-center justify-center font-bold text-5xl m-8">
        About Us
      </h2>
      <p className="text-lg text-gray-700 text-center m-12">
        More than only a price comparition site! We are here to help you in
        picking the best tech form your remote work, gaming or other activities.
        We want to help you, to be there for you, not only with the lowest price
        but also with the best specs.
      </p>
      <div className="flex flex-row justify-center">
        <div className=" flex flex-col ms-12 mt-4 p-8">
          <div className="flex flex-row mb-4">
            <i className="bi bi-laptop text-4xl font-bold me-6 "></i>
            <p className="text-lg content-center">
              We offer a handpicked selection of the best tablets, laptops, and
              more to meet all your household and tech needs.
            </p>
          </div>
          <div className="flex flex-row mb-4">
            <i className="bi bi-person-check-fill text-4xl font-bold me-6"></i>
            <p className="text-lg content-center">
              The selection is made by real humans, without any use of AI
            </p>
          </div>
          <div className="flex flex-row">
            <i className="bi bi-stars text-4xl font-bold me-6"></i>{" "}
            <p className="text-lg content-center">
              {" "}
              10 years of experience in the tech industry
            </p>
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-xl px-5 py-4 text-center mt-40 mx-64"
          >
            <i className="bi bi-house me-2"></i>
            <Link to="/">Home</Link>
          </button>
        </div>
        <div>
          <img src={aboutImage} alt="" className=" h-3/4 rounded-md" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
