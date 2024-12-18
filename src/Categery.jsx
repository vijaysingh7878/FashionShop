import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categery = ({ slug, rating, setRating, price, setPrice }) => {
  const ratingReturn = [4, 3, 2, 1];
  const [show, setShow] = useState([]);

  // Fetch categories from API
  const getShow = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((success) => {
        setShow(success.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 bg-white rounded-lg shadow-md overflow-y-auto h-[100vh] sticky top-0">
      {/* Rating Filter Section */}
      <div className="bg-white px-6 pb-6 mb-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Rating</h2>
        <div className="space-y-2">
          <div
            className={`py-3 px-4 rounded-lg  mb-4 cursor-pointer text-center ${
              rating === 0 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-blue-500"
            } transition-all duration-300`}
            onClick={() => setRating(0)}
          >
            All Ratings
          </div>
          {ratingReturn.map((v, i) => (
            <div
              key={i}
              className={`py-3 px-4 rounded-lg cursor-pointer text-center border border-gray-300 ${
                rating === v ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-blue-500"
              } transition-all duration-300`}
              onClick={() => setRating(v)}
            >
              {v} ⭐ & Above
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter Section */}
      <div className="bg-white p-6 mb-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Price</h2>
        <div className="flex space-x-4">
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setPrice({ ...price, from: event.target.value })}
          />
          <span className="flex items-center font-bold text-gray-800">to</span>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(event) => setPrice({ ...price, to: event.target.value })}
          />
        </div>
      </div>

      {/* Horizontal Scrolling Category Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Categories</h2>

        <Link to="/product">
          <div
            className={`text-center py-3 mb-3 rounded-lg cursor-pointer text-white ${
              slug === undefined ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-500"
            } transition-all duration-300`}
          >
            All Categories
          </div>
        </Link>

        {/* Horizontal Scrollable Category List */}
        <div className="py-2">
          {show.map((v, i) => (
            <Link to={`/product/${v.slug}`} key={i}>
              <CategoryItem name={v} slug={slug} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Category Item Component (Individual category item)
function CategoryItem({ name, slug }) {
  return (
    <div
      className={`py-3 px-4 rounded-lg cursor-pointer mb-4 border border-gray-300 text-center whitespace-nowrap ${
        slug === name.slug ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-blue-500"
      } transition-all duration-300`}
    >
      {name.name}
    </div>
  );
}

export default Categery;
