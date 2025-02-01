import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "./data";

const AdminPanel = () => {
  const [products, setProducts] = useState(productsData);
  const addProduct = () => {
    const newProduct = { id: `${products.length + 1}`, name: "New Product", price: 9999, description: "New product description." };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default AdminPanel;
