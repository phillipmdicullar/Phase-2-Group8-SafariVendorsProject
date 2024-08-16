import React from "react";

function ProductCard({ product, handleAddToCart }) {
  const addToCart = () => {
    if (handleAddToCart) {
      handleAddToCart(product);
    } else {
      console.error("handleAddToCart is not defined");
    }
  };

  return (
    <div className="container py-8 px-4 mx-auto bg-[#CBE3E5]  p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="items-center text-center font-serif Jacques Francois text-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-black">{product.category}</p>
        <p className="text-black mb-4">{product.vendor}</p>
        <div className="flex justify-around items-center w-full">
          <h4 className="text-lg font-bold text-black bg-white w-20 rounded-full h-11 pt-2">
            Ksh {product.price}
          </h4>
          <button
            className="bg-green-500 text-black px-4 py-2 rounded-full shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
