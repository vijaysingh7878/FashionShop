import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categery = ({ slug, rating, setRating, price, setPrice }) => {
  const ratingReturn = [4, 3, 2, 1];
  const [show, setShow] = useState([]);
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
    <>
      <div
        className="xl:w-11/12 md:w-4/5  xl:text-base  md:text-sm  text-center overflow-y-scroll h-[90vh]  mb-3 m-3 sticky top-0"
        id="cateGery"
      >
        {/* rating part start */}
        <div className="mb-4">
          <h2
            className={` m-auto my-2 shadow-lg p-2 rounded-lg hover:bg-blue-500 ${
              rating === 0 ? "bg-blue-500  text-white" : ""
            } cursor-pointer`}
            onClick={() => {
              setRating(0);
            }}
          >
            All Rating
          </h2>
          {ratingReturn.map((v, i) => {
            return (
              <div
                key={i}
                className={`border  m-auto my-2 shadow-lg p-2 cursor-pointer rounded-lg hover:bg-blue-500 ${
                  rating == v ? "bg-blue-500  text-white" : ""
                }`}
                onClick={() => {
                  setRating(v);
                }}
              >
                {`${v}`} ⭐ & Above
              </div>
            );
          })}
        </div>
        {/* rating part end */}

        {/* price part start */}

        <div className="mb-4 pb-3">
          <h1 className=" rounded-lg shadow-lg p-2 my-2 m-auto bg-blue-500">
            Price -
          </h1>
          <input
            type="number"
            className="border border-black  px-2 w-4/6"
            onChange={(event) => {
              setPrice({ ...price, from: event.target.value });
            }}
          />
          <span className="px-2 font-bold block"> to </span>
          <input
            type="number"
            className="border  border-black px-2 w-4/6"
            onChange={(event) => {
              setPrice({ ...price, to: event.target.value });
            }}
          />
        </div>
        {/* price part end */}

        {/* categary part start */}

        <div>
          <Link to={"/product"}>
            <h2
              className={`lg:text-xl   m-auto my-2 shadow-lg p-2 rounded-lg  hover:bg-blue-500 ${
                slug == undefined ? "bg-blue-500  text-white" : ""
              }`}
            >
              All Cetegory
            </h2>
          </Link>
          {show.map((v, i) => {
            return (
              <Link to={`/product/${v.slug}`} key={i}>
                <Newfil name={v} slug={slug} />
              </Link>
            );
          })}
        </div>
        {/* categary part end */}
      </div>
    </>
  );
};
function Newfil({ name, slug }) {
  return (
    <div
      className={`border rounded-lg m-auto my-2 shadow-lg p-2 cursor-pointer hover:text-white hover:bg-blue-500 ${
        slug == name.slug ? "bg-blue-500 text-white  rounded-lg" : ""
      }`}
    >
      {name.name}
    </div>
  );
}

export default Categery;
