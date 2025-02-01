import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "./data";

const ProductList = () => (
  <div>
    <h1>Product List</h1>
    <ul>
      {productsData.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/admin">Admin Panel</Link>
  </div>
);

export default ProductList;
