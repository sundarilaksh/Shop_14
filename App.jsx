import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/adminpage';
import UserPage from './components/UserPage';
import ProductDetailPage from './components/ProductDetail'; // Import the ProductDetailPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AddProduct />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} /> {/* Add this route */}
        <Route path="/" element={<UserPage />} />
      </Routes>
    </Router>
  );
}
export default App;