import React from "react";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 p-[29px] mt-[9px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        {/* About Page Title */}
        <h1 className="text-3xl font-bold text-center mb-6">About Our Products</h1>
        
        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center mb-6">
          At <span className="font-bold">Fashion Shop</span> , we believe in offering products that bring quality, innovation, and value to our customers. Our goal is to provide you with an exceptional shopping experience, whether you're looking for everyday essentials, trendy items, or unique gifts.
        </p>

        {/* Our Product Categories */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Our Product Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Electronics</h4>
              <p className="text-gray-600">
                From the latest smartphones to cutting-edge gadgets, explore our collection of electronics that are designed to enhance your digital lifestyle.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Fashion</h4>
              <p className="text-gray-600">
                Stay stylish with our curated fashion collections, offering the latest trends in clothing, accessories, and footwear for all occasions.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Home Goods</h4>
              <p className="text-gray-600">
                Transform your living space with our range of home goods, from furniture to decor, all designed to create a welcoming atmosphere.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 mx-auto max-w-2xl">
            <li>Curated Collection: We offer a carefully chosen selection of high-quality products from trusted brands.</li>
            <li>Customer-Focused: We put our customers at the heart of everything we do, ensuring a seamless and enjoyable shopping experience.</li>
            <li>Affordable Prices: We believe in offering great value without compromising on quality.</li>
            <li>Fast and Reliable Delivery: Our efficient shipping ensures your products arrive on time and in perfect condition.</li>
          </ul>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default About;
