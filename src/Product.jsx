import React, { useState } from "react";
import List from "./List";
import Categery from "./Categery";
import { useParams } from "react-router-dom";
const Product = () => {
  const { slug } = useParams();
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState({
    from: 0,
    to: 10000,
  });

  return (
    <>
      <div className="flex justify-around">
        <div className="2xl:w-[18%] lg:w-[24%] md:w-[30%]  sm:w-[28%] border-r-2">
          <Categery
            slug={slug}
            rating={rating}
            setRating={setRating}
            price={price}
            setPrice={setPrice}
          />
        </div>
        <div className="xl:w-4/5 lg:w-[74%] md:w-[68%]  sm:w-[70%]">
          <List
            slug={slug}
            rating={rating}
            setRating={setRating}
            price={price}
            setPrice={setPrice}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
