import React from "react";
import "./index.css";
import homeImage from "./homeImage.png";

const Welcome = () => {
  return (
    <div className="flex flex-row content-center  bg-gradient-to-br from-gray-400 to-emerald-600">
      <div className="flex-1 content-center text-center ">
        <div className="font-bold text-7xl px-28 tracking-wider">
          Your Best Choice
        </div>
        <div className="text-lg text-gray-800 text-center my-12 mx-32">
          MyBestChoice is your one-stop online store for top-rated home
          appliances and electronics. We offer a handpicked selection of the
          best refrigerators, tablets, laptops, and more to meet all your
          household and tech needs. Discover exceptional quality, unbeatable
          prices, and reliable customer service for every purchase—only at
          BestChoice!
        </div>
      </div>
      <div className="flex-1 ">
        <img src={homeImage} alt="" className="w-full h-auto " />
      </div>
    </div>
  );
};
export default Welcome;
