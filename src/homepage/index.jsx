import React, { useState, useEffect } from "react";
import Welcome from "./welcome";
import BestItems from "./items";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    const jsonData = {
      items: [
        {
          name: "Laptop Apple MacBook Pro 14",
          image:
            "https://s13emagst.akamaized.net/products/80627/80626261/images/res_6e48dac5ebdc3ffda7e893d02c20eda0.jpg",
          price: 2399.0,
          rating: 4.7,
        },
        {
          name: "Asus ROG Zephyrus G14",
          image:
            "https://www.pcworld.com/wp-content/uploads/2024/01/ASUS_ROG_Zephyrus_G14_GA402_1.jpg",
          price: 2500.0,
          rating: 4.9,
        },
        {
          name: "LENOVO Yoga Pro 9",
          image:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6571/6571565_sd.jpg",
          price: 2523.86,
          rating: 4.7,
        },
      ],
    };

    setItems(jsonData.items);
  }, []);

  return (
    <div>
      <Welcome />
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <BestItems
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
