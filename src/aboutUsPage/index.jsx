import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="underline">About Us</h2>
        <h2 className="text-yellow-400">Your Best Choice</h2>
        <p>
          MyBestChoice is your one-stop online store for top-rated home
          appliances and electronics. We offer a handpicked selection of the
          best refrigerators, tablets, laptops, and more to meet all your
          household and tech needs. Discover exceptional quality, unbeatable
          prices, and reliable customer service for every purchase—only at
          BestChoice!
        </p>
        <i className="bi bi-person-check-fill ">
          We offer a handpicked selection of the best tablets, laptops, and more
          to meet all your household and tech needs. The selection is made by
          real humans, without any use of AI
        </i>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
}
