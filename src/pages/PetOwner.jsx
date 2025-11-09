import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import TickerBar from "../components/TickerBar";
import productsData from "../data/products.json";
import PetCareTabs from "../components/PetCareSections/PetCareTabs";

export default function PetOwner() {
  const name = localStorage.getItem("userName");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-blue-700 mb-2 text-center">
        Welcome, {name}! 🐶
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Manage your pet’s essentials and discover top-rated products.
      </p>

      {/* 🔥 Add scrolling ticker */}
      <TickerBar />
      <PetCareTabs />
      <div className="mt-6">
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No products found.</p>
        )}
      </div>
    </div>
  );
}
