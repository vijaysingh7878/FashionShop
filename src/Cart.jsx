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
  <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-4 mb-4 md:mb-0">
      <div className="w-24 h-24 bg-gray-200 rounded-md">
        <img
          src={totalCart.thumbnail}
          alt={totalCart.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {totalCart.title}
        </h3>
        <div className="text-sm text-gray-500">
          #ID : {totalCart.id}
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-2 gap-2 mb-4 md:mb-0">
      <span className="text-sm">Quantity -</span>
      <input
        type="number"
        placeholder="1"
        className="border border-black w-16 px-1 py-1 text-center text-sm md:w-20"
      />
    </div>

    <div className="flex items-center space-x-4 text-lg font-semibold text-gray-800 mb-4 md:mb-0">
      ₹ {totalCart.price}
    </div>

    <div>
      <button
        className="flex items-center px-3 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
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
