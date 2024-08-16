import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Inputs from "./Inputs";

const ProductsPage = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://safarivendors-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProducts = {
      name,
      category,
      vendor,
      price: parseFloat(price),
      image,
    };

    fetch("https://safarivendors-backend.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added:", data);
        setProducts((prevProducts) => [...prevProducts, data]);
        setName("");
        setCategory("");
        setVendor("");
        setPrice("");
        setImage("");
      })
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div className="bg-[#bbbbbb] mb-2">
      <div className="flex justify-center items-center mb-10 mt-3">
        <input
          type="text"
          placeholder="Search for Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="align-center mt-3 rounded-lg h-10 w-80 p-2 text-black"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pl-20 pr-20">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        <Inputs
          placeholder="Enter Product name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Inputs
          placeholder="Enter Product category"
          type="text"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Inputs
          placeholder="Enter Product vendor"
          type="text"
          value={vendor}
          required
          onChange={(e) => setVendor(e.target.value)}
        />
        <Inputs
          placeholder="Enter Product price"
          type="text"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <Inputs
          placeholder="Enter Product image"
          type="text"
          value={image}
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductsPage;
