import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const BestItems = ({ name, image, price, rating }) => {
  return (
    <div className="flex flex-col content-center justify-center text-center bg-white">
      <img src={image} alt={name} className="w-20 h-20" />
      <h1>{name}</h1>
      <h2>${price.toFixed(2)}</h2>
      <h3>{rating} ⭐</h3>
    </div>
  );
};

BestItems.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default BestItems;
