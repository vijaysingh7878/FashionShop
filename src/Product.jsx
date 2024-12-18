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
      {/* Container for category on the left and product list on the right */}
      <div className="flex m-1">
        {/* Category Section - Takes 1/4 of the width */}
        <div className="xl:w-[20%] md:max-w-1/5 sm:w-1/3 mb-4 md:mb-0 lg:text-sm sm:text-[10px] ceteGory">
          <Categery
            slug={slug}
            rating={rating}
            setRating={setRating}
            price={price}
            setPrice={setPrice}
          />
        </div>

        {/* Product List Section - Takes 3/4 of the width */}
        <div className="xl:w-[78%] md:max-w-4/5">
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
