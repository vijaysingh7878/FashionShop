import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cardContext } from "./context/MainContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, setCart } = useContext(cardContext);

  let priceSum = 0;
  const totalPrice = cart.forEach((v, i) => {
    priceSum = priceSum + v.price;
  });

  return (
    <>
      <ToastContainer autoClose={500} position="top-center" />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
          {/* Cart Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h1 className="text-2xl font-semibold text-gray-800">
              Your Shopping Cart
            </h1>
            <span className="text-gray-500"> items</span>
          </div>

          {/* Cart Items */}
          {cart.length != 0 ? (
            cart.map((v, i) => {
              {
                return (
                  <CartIteam
                    totalCart={v}
                    indexNum={i}
                    key={i}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              }
            })
          ) : (
            <h1 className="text-center font-bold text-xl p-6">
              Product Not Available
            </h1>
          )}
          {/* Cart Total */}
          <div className="p-4 flex justify-between items-center border-t flex-wrap">
            <div className="text-xl font-semibold text-gray-800">
              Total Products - {cart.length}
            </div>
            <div className="text-2xl font-semibold text-gray-800">
              Total Price - ₹ {priceSum.toFixed(2)}
            </div>
          </div>

          {/* Checkout Button */}
          <div className="p-4 text-center">
            <button className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
function CartIteam({ totalCart, indexNum, cart, setCart }) {
  const cartDelete = () => {
    const deleteCart = [...cart];
    deleteCart.splice(indexNum, 1);
    setCart(deleteCart);
    toast.success("Product Delete !");
  };
  return (
    <>
  <div className="space-y-4 p-4 max-w-full">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b gap-4">
    {/* Image and Title Section */}
    <div className="flex items-center space-x-4 md:w-1/4">
      <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
        <Link to={`/ProductDetails/${totalCart.id}`}>
        <img
          src={totalCart.thumbnail}
          alt={totalCart.title}
          className="w-full h-full object-cover"
        />
        </Link>
        
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {totalCart.title}
        </h3>
        <div className="text-sm text-gray-500">#ID : {totalCart.id}</div>
      </div>
    </div>

    {/* Quantity Input Section */}
    <div className="flex items-center gap-2">
      <span className="text-sm">Quantity:</span>
      <input
        type="number"
        placeholder="1"
        className="border border-black px-2 py-1 text-center text-sm w-full sm:w-16 md:w-20"
      />
    </div>

    {/* Price Section */}
    <div className="text-lg font-semibold text-gray-800">
      ₹ {totalCart.price}
    </div>

    {/* Delete Button Section */}
    <div>
      <button
        className="flex items-center px-3 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        aria-label="Delete item"
        onClick={() => cartDelete()}
      >
        Delete
      </button>
    </div>
  </div>
</div>





    </>
  );
}

export default Cart;
