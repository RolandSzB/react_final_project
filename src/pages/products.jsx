import React, { useState } from "react";
import { useQuery } from "react-query";
import "./index.css";

const fetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

const fetchProducts = async (category) => {
  if (!category) return { products: [] }; // Avoids errors when category is null
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  if (!response.ok) {
    throw new Error("Category not available");
  }

  return response.json();
};

const Products = () => {
  const {
    data: categories,
    error: categoriesError,
    isLoading: loadingCategories,
  } = useQuery("categories", fetchCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryError, setCategoryError] = useState(null);

  const { data, error, isLoading } = useQuery(
    ["products", selectedCategory],
    () => fetchProducts(selectedCategory),
    {
      enabled: !!selectedCategory,
      onError: () => setCategoryError("Category not available"),
      onSuccess: () => setCategoryError(null),
    }
  );

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSelectedCategory(searchTerm.toLowerCase());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Call search function when Enter is pressed
    }
  };

  if (loadingCategories) return <div>Loading categories...</div>;
  if (categoriesError) return <div>Error: {categoriesError.message}</div>;

  return (
    <div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search categories..."
          className="border p-2 rounded w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      {isLoading && <div>Loading products...</div>}
      {error || categoryError ? (
        <div className="text-center text-red-500 font-bold">
          Category not available
        </div>
      ) : data?.products && data.products.length === 0 ? (
        <div className="text-center text-gray-500 font-bold">
          No products found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {data?.products?.map((product) => (
            <div
              key={product.id}
              className="w-64 h-auto m-4 border p-2 rounded"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="font-bold text-lg mt-2">{product.title}</h3>
              <p className="text-green-600 font-bold">${product.price}</p>
              <p className="text-yellow-500">⭐ {product.rating}</p>
              <a
                href={`https://www.amazon.com/s?k=${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white text-center p-2 mt-2 rounded"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
