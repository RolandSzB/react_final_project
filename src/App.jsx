import * as React from "react";
import "./App.css";
import HomePage from "./homepage";
import Footer from "./footer/footerIndex";
import AboutUsPage from "./aboutUsPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const LocationWrapper = () => {
    const location = useLocation();
    const showFooterPaths = ["/"];

    return (
      <>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutUsPage />} />
        </Routes>
        {showFooterPaths.includes(location.pathname) && <Footer />}
      </>
    );
  };

  return (
    <BrowserRouter>
      <LocationWrapper />
    </BrowserRouter>
  );
}

export default App;
