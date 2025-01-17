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
          name: "Apple MacBook Pro 14",
          image:
            "https://s13emagst.akamaized.net/products/80627/80626261/images/res_6e48dac5ebdc3ffda7e893d02c20eda0.jpg",
          price: 2399.0,
          rating: 4.7,
          link: "https://www.emag.ro/laptop-apple-macbook-pro-14-cu-procesor-apple-m4-pro-12-nuclee-cpu-si-16-nuclee-gpu-24gb-ram-512gb-ssd-space-black-tastatura-internationala-manual-ro-mx2h3ro-a/pd/DZNPNRYBM/?ref=sponsored_products_listing_r_1_1&recid=recads_1_42385e1276997bc5cd591df5129f46c18d9344e9353f99e9eec0e05152997da4_1737109000&aid=a968c36a-c11d-11ef-8003-06eb3cbbbd1b&oid=208736395&aidr=a968b998-c11d-11ef-8003-06eb3cbbbd1b&scenario_ID=1",
        },
        {
          name: "Asus ROG Zephyrus G14",
          image:
            "https://dlcdnwebimgs.asus.com/gain/47215993-C79C-4761-9F1C-EBFA5D2E029B",
          price: 2500.0,
          rating: 4.9,
          link: "https://www.emag.ro/laptop-gaming-asus-rog-zephyrus-g14-ga403ui-cu-procesor-amd-ryzentm-9-8945hs-pana-la-5-2-ghz-14-3k-oled-120hz-32gb-ddr5-1tb-ssd-nvidiar-geforce-rtxtm-4070-8gb-gddr6-no-os-eclipse-gray-ga403ui-qs051/pd/DGNP8TYBM/",
        },
        {
          name: "LENOVO Yoga Pro 9",
          image:
            "https://p4-ofp.static.pub//fes/cms/2024/11/01/xuckml3h1inmw4pscngfegm9i0y7zn840754.png",
          price: 2523.86,
          rating: 4.7,
          link: "https://www.lenovo.com/ro/ro/p/laptops/yoga/yoga-pro-series/yoga-pro-9i-gen-8-%2814-inch-intel%29/len101y0036?orgRef=https%253A%252F%252Fwww.google.com%252F",
        },
      ],
    };

    setItems(jsonData.items);
  }, []);

  return (
    <div>
      <Welcome />
      <div className="flex flex-col content-center items-center ">
        <h1 className="font-bold text-3xl hover:underline mt-12">Best Items</h1>
        <div className="flex flex-wrap gap-4 justify-between mx-36 mb-8">
          {items.map((item, index) => (
            <BestItems
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
