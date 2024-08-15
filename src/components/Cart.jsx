import React from "react";
import CartItems from "./CartItems";

const Cart = ({ cartItems }) => {
  if (!cartItems || !Array.isArray(cartItems)) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        <table className="font-serif border-collapse w-full border text-center py-2">
          <thead>
            <tr>
              <th className="text-left py-2 font-bold p-2 border ">Image</th>
              <th className="text-left py-2 font-bold p-2 border ">Name</th>
              <th className="text-left py-2 font-bold p-2 border ">Category</th>
              <th className="text-left py-2 font-bold p-2 border ">Vendor</th>
              <th className="text-left py-2 font-bold p-2 border ">Price</th>
              <th className="text-left py-2 font-bold p-2 border ">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return <CartItems key={item.id} item={item} index />;
            })}
          </tbody>
        </table>
      )}
      <button>Proceed To Check</button>
    </div>
  );
};

export default Cart;
