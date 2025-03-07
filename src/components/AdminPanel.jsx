import React, { useState } from "react";
import productsData from "../data/products";

function AdminPanel() {
  const [adminProducts, setAdminProducts] = useState(productsData);

  const deleteProduct = (id) => {
    setAdminProducts(adminProducts.filter((product) => product.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      {adminProducts.map((product) => (
        <div key={product.id} className="admin-product">
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;