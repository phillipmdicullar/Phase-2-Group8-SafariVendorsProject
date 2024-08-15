import { Link } from "react-router-dom";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="container grid grid-cols-1 bg-[#CBE3E5] p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center font-serif Jacques Francois text-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-48 object-cover rounded-md mb-4"
        />
        <h3 className="font-bold mt-4 text-4xl">{product.name}</h3>
        <p className="text-black-500 ">{product.category}</p>
        <p className="text-black-500 ">{product.vendor}</p>
        <div className="flex justify-around items-center mt-4 w-full">
          <h4 className="text-lg font-bold text-black-700 bg-white rounded w-10 h-10 cursor-pointer ">
            {product.price}
          </h4>

          <Link>
            <img
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
              alt="add to cart"
              className="w-10 h-10 cursor-pointer bg-white rounded "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
