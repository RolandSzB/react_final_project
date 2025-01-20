import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./laptops.css";

// Fetch laptops from DummyJSON API
const fetchLaptops = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/laptops"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch laptops");
  }
  return response.json();
};

const Laptops = () => {
  const { data, error, isLoading } = useQuery("laptops", fetchLaptops);
  const [filter, setFilter] = useState("top-rated");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const getFilteredLaptops = () => {
    if (!data?.products) return [];
    const laptops = [...data.products];

    if (filter === "top-rated") {
      return laptops.sort((a, b) => b.rating - a.rating).slice(0, 5);
    } else if (filter === "cheapest") {
      return laptops.sort((a, b) => a.price - b.price).slice(0, 5);
    }
    return laptops;
  };

  const filteredLaptops = getFilteredLaptops();

  return (
    <div>
      <div className="flex flex-row text-center justify-center ">
        <h1 className="font-bold text-xl text-center  content-center">
          Filter by:
        </h1>
        <button
          onClick={() => setFilter("top-rated")}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2 text-center m-2 "
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
        {filteredLaptops.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">
                <span>&#9733; {product.rating}</span>
              </div>{" "}
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

export default Laptops;
