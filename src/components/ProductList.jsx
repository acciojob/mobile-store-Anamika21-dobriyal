import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <p>Price: {product.price}</p>
          <button>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;