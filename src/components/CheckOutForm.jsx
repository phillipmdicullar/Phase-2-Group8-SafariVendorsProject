import React from "react";

const CheckOutForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="flex flex-col space-y-4">
        <p className="text-xl font-medium">Total Amount</p>
        <input
          type="text"
          placeholder="Pickup Point"
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={() => alert("Order Submitted Successfully")}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
        Make Order
      </button>
    </div>
  );
};

export default CheckOutForm;
