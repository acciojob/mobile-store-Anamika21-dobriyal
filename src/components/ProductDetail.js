import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "./data";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ProductDetail;
