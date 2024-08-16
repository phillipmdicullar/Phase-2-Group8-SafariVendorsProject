import Hero from "./Hero";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import Cart from "./Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://safarivendors-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  const featuredProducts = products.slice(0, 3);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#bbbbbb]">
              <Hero />
              <div className="container mx-auto px-4 py-8 bg-[#bbbbbb] w-full">
                <h2 className="text-2xl text-center font-bold text-black">
                  Featured Products
                </h2>
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      handleAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/products"
          element={<ProductsPage handleAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
    </Router>
  );
}
