import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cardContext } from "./context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = ({ slug, rating, setRating, price, setPrice }) => {
  const [Api, setApi] = useState([]);
  const [limit, setLimit] = useState(15);

  const getApi = () => {
    let Api;
    if (slug == undefined) {
      Api = `https://dummyjson.com/products?limit=${limit}`;
    } else {
      Api = `https://dummyjson.com/products/category/${slug}?limit=${limit}`;
    }
    axios
      .get(Api)
      .then((success) => {
        const finalData = success.data.products.filter((v) => {
          return (
            v.rating >= rating && v.price >= price.from && v.price <= price.to
          );
        });
        setApi(finalData);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getApi();
  }, [slug, limit, rating, price]);



  return (
    <>
      <div className="flex justify-between px-3">
        <span className="font-semibold">Total Products: {Api.length}</span>
      </div>
      <div className="flex flex-wrap gap-4 mt-2 justify-around">
        {Api.map((v, i) => (
          <NewList name={v} key={i} />
        ))}
      </div>
      <div className="text-center my-20">
        <button
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setLimit(limit + 3)}
        >
          Load More
        </button>
      </div>
      <ToastContainer autoClose={500} position="top-center" />
    </>
  );
};

function NewList({ name }) {
  const { cart, setCart } = useContext(cardContext);

  const addCart = (event) => {
    const filterData = cart.filter((v) => v.id === event.id);
    if (filterData.length === 0) {
      const finalCart = [...cart, event];
      setCart(finalCart);
      toast.success("Product Added!");
    } else {
      toast.error("Product Already Added!");
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden lg:w-[28%] ">
      <Link to={`/ProductDetails/${name.id}`}>
        <img
          className="w-full object-cover rounded-t-lg hover:scale-110 duration-300"
          src={name.thumbnail}
          alt="Product"
        />
      </Link>
      <div className="p-4">
        <span className="text-white rounded-lg p-1 px-3 mt-2 text-sm bg-blue-500 border">
          {name.category}
        </span>
        <Link to={`/ProductDetails/${name.id}`}>
          <h2 className="text-md font-semibold text-gray-800 my-2">
            {name.title}
          </h2>
        </Link>
        <h2 className="font-semibold text-gray-800">
          Rating: <span className="text-blue-500">{name.rating}</span> / 5
        </h2>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ₹ {name.price}
          </span>
          <button
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => addCart(name)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
