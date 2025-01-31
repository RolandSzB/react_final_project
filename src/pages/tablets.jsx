import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./index.css";

// Fetch tablets from DummyJSON API
const fetchTablets = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/tablets"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch tablets");
  }
  return response.json();
};

const Tablets = () => {
  const { data, error, isLoading } = useQuery("tablets", fetchTablets);
  const [filter, setFilter] = useState("top-rated");
  const [showComments, setShowComments] = useState({}); // State to track comment visibility

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const getFilteredTablets = () => {
    if (!data?.products) return [];
    const tablets = [...data.products];

    if (filter === "top-rated") {
      return tablets.sort((a, b) => b.rating - a.rating).slice(0, 5);
    } else if (filter === "cheapest") {
      return tablets.sort((a, b) => a.price - b.price).slice(0, 5);
    }
    return tablets;
  };

  const filteredTablets = getFilteredTablets();

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <div className="flex flex-row text-center justify-center">
        <h1 className="font-bold text-xl text-center content-center">
          Filter by:
        </h1>
        <button
          onClick={() => setFilter("top-rated")}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2 text-center m-2"
        >
          <i className="bi bi-stars"></i> Best Rating
        </button>
        <button
          onClick={() => setFilter("cheapest")}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2 text-center m-2"
        >
          <i className="bi bi-cash-coin"></i> Cheapest
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center mb-20">
        {filteredTablets.map((product) => (
          <div key={product.id} className="w-64 h-auto">
            <img src={product.thumbnail} alt={product.title} />

            <div className="text-center content-center">
              <h3 className="font-bold text-xl text-center mx-4 pb-3 hover:underline h-16">
                {product.title}
              </h3>
              <p className="font-bold text-green-600 hover:text-red-600 h-8">
                ${product.price}
              </p>
              <div
                className="hover:text-yellow-500 p-2 cursor-pointer"
                onClick={() => toggleComments(product.id)}
              >
                <i className="bi bi-star-fill text-yellow-400 me-2"></i>
                {product.rating}
              </div>

              {showComments[product.id] && product.reviews && (
                <div className="text-left p-2 border-t mt-2">
                  <h4 className="font-bold text-lg">Reviews:</h4>
                  <ul>
                    {product.reviews.map((review, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {review.comment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2"
              >
                <a
                  href="https://www.amazon.com/s?k=laptops&crid=BVO42FDUYF7Z&sprefix=laptops%2Caps%2C296&ref=nb_sb_noss_1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now! <i className="bi bi-cart"></i>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablets;
