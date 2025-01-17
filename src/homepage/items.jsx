import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const BestItems = ({ name, image, price, rating, link }) => {
  return (
    <div className="flex flex-col content-center items-center justify-center text-center bg-white px-8 pb-8">
      <img src={image} alt={name} className="w-72 h-72" />
      <h1 className="font-bold text-xl hover:underline">{name}</h1>
      <h2 className="text-xl hover:text-red-800">${price.toFixed(2)}</h2>
      <h3>{rating} ⭐</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-lime-600 rounded-lg text-white text-lg px-4 py-2 hover:bg-lime-500 hover:text-xl hover:font-bold inline-block"
      >
        Buy Now! <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

BestItems.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default BestItems;
