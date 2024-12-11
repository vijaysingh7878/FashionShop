import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cardContext } from "./context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { cart, setCart } = useContext(cardContext);
  const { id } = useParams();
  const [showProduct, setShowProduct] = useState();
  const fachDataApi = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((success) => {
        setShowProduct(success.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fachDataApi();
  }, []);

  const addCart = (productItem) => {
    console.log(productItem);
    console.log(cart);
    const filterData = cart.filter((v, i) => {
      return productItem.id == v.id;
    });
    if (filterData.length == 0) {
      const finalCart = [...cart, productItem];
      setCart(finalCart);
      toast.success("Product Added !");
    } else {
      toast.error("Product Already Added !");
    }
  };
  return (
    <>
     <ToastContainer autoClose={500} position="top-center" />
      {
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={`${showProduct?.thumbnail}`}
                alt=""
                className="w-full h-auto max-w-lg rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between space-y-6">
              <h1 className="text-3xl font-semibold text-gray-900">
                {showProduct?.title}
              </h1>
              <p className="text-xl text-gray-700 font-bold">
                $ - {showProduct?.price}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex">Rating - </div>
                <span className="text-gray-600 text-sm">
                  ({showProduct?.rating})
                </span>
              </div>

              {/* Description */}
              <div className="text-gray-600 space-y-4">
                <h2 className="text-2xl font-medium">Description</h2>
                <p>{showProduct?.description}</p>
              </div>

              {/* Add to Cart Section */}
              <div className="flex space-x-4">
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  onClick={() => {
                    addCart(showProduct);
                  }}
                >
                  Add to Cart
                </button>
                <button className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-medium text-gray-900">
              Customer Reviews
            </h2>

            {/* Reviews List */}
            {showProduct?.reviews.map((v, i) => {
              return (
                <div className="space-y-4 mt-6" key={i}>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <div>
                      <div className="">{v.reviewerName}</div>
                      <div className="flex text-[13px] text-gray-600">
                        Rating - {v.rating}
                      </div>
                    </div>

                    <p className="mt-2 text-gray-800 text-sm">
                      comment - {v.comment}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* New Review Form */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Leave a Review
              </h3>

              <div className="mt-4">
                {/* Rating Selector */}
                <div className="flex items-center space-x-2">
                  <label className="text-gray-700">Your Rating:</label>
                  <div className="flex">
                    <button className="focus:outline-none">star</button>
                  </div>
                </div>

                {/* Comment Input */}
                <textarea
                  rows="4"
                  className="mt-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your comment here..."
                ></textarea>

                {/* Submit Button */}
                <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProductDetails;
