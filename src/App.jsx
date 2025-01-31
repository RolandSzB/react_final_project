import React from "react";
import "./App.css";
import NavBar from "./navbar";
import Laptops from "./pages/laptops";
import Tablets from "./pages/tablets";
import Products from "./pages/products";
import HomePage from "./homepage";
import Footer from "./footer/footerIndex";
import AboutUsPage from "./aboutUsPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  // Wrapper to manage the location logic and render components
  const LocationWrapper = () => {
    const location = useLocation();
    const showFooterPaths = ["/", "/laptops", "/tablets"]; // Define routes that show the footer

    return (
      <>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutUsPage />} />
          <Route path={"/laptops"} element={<Laptops />} />
          <Route path={"/tablets"} element={<Tablets />} />
          <Route path={"/products"} element={<Products />} />
        </Routes>
        {showFooterPaths.includes(location.pathname) && <Footer />}
      </>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LocationWrapper />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
