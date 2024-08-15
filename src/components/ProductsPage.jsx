import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Inputs from "./Inputs";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
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

    fetch("http://localhost:3000/products", {
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
      <input
        type="text"
        placeholder="Search for Products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="align-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <button
          type="submit"
          className="bg--500 text-black px-4 py-2 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductsPage;
