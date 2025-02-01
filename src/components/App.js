import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import AdminPanel from "./AdminPanel";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);

export default App;
