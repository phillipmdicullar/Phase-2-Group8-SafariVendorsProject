import Hero from "./Hero";
import ProductCard from "./ProductCard";
import ProductsPage from "./ProductsPage";
export default function App() {
  return (
    <div className="bg-[#BBBBBB]">
      <div>NabBar</div>
      <Hero />
      <div>
        <h2>Featured Products</h2>
        <div className="grid grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <ProductsPage />
    </div>
  );
}
