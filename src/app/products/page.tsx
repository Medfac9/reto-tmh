"use client";

import React, { useEffect, useState } from "react";
import { ProductList } from "@/components/ProductList";
import { ProductFilter } from "@/components/ProductFilter";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
}

async function fetchProducts(): Promise<Product[]> {
  return [
    { id: 1, name: "Portátil", price: 1000 },
    { id: 2, name: "Ratón", price: 20 },
    { id: 3, name: "Teclado", price: 50 },
    { id: 4, name: "Monitor", price: 300 },
  ];
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data);
    }
    loadProducts();
  }, []);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Productos</h1>
      <div className="mt-6 text-center">
        <Link href="/profile">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Volver al Perfil
          </span>
        </Link>
      </div>
      <ProductFilter filter={filter} onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;
