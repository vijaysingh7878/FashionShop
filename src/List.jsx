import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cardContext } from "./context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = ({ slug, rating, setRating, price, setPrice }) => {
  const [Api, setApi] = useState([]);
  const [limit, setLimit] = useState(16);
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
        const finaalData = success.data.products.filter((v, i) => {
          if (
            v.rating >= rating &&
            v.price >= price.from &&
            v.price <= price.to
          ) {
            return true;
          }
        });

        setApi(finaalData);
      })
      .catch((erroor) => {});
  };
  useEffect(() => {
    getApi();
  }, [slug, limit, rating, price]);
  return (
    <>
      <h1 className="font-semibold">Total Products : - {`${Api.length}`} </h1>
      <div className="flex flex-wrap gap-4 mt-2 justify-around">
        {Api.map((v, i) => {
          return <NewList name={v} key={i} />;
        })}
      </div>
      <div className="text-center my-20">
        <button
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => {
            setLimit(limit + 4);
          }}
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
    const filterData = cart.filter((v, i) => {
      return event.id == v.id;
    });
    if (filterData.length == 0) {
      const finalCart = [...cart, name,];
      setCart(finalCart);
      toast.success("Product Added !");
    } else {
      toast.error("Product Already Added !");
    }
  };
  return (
    <>
      <div className="rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden " id="productDetails">
        <Link to={`/ProductDetails/${name.id}`}>
          <img
            className="w-full object-cover rounded-t-lg hover:scale-110 duration-300 "  
            src={name.thumbnail}
            alt="Product"
          />
        </Link>

        <div className="p-4">
          <span className="text-white rounded p-1 mt-2 text-sm bg-blue-800">
            {name.category}
          </span>
          <Link to={`/ProductDetails/${name.id}`}>
            <h2 className="text-lg font-semibold text-gray-800">
              {name.title}
            </h2>
          </Link>
          <h2 className="font-semibold text-gray-800">
            Rating : - ( <span className="text-blue-500">{name.rating}</span> /
            5 )
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
     
    </>
  );
}

export default List;