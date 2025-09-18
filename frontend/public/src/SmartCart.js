import React, { useState } from 'react';
import { fetchSmartCart } from './api';

function SmartCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateCart = async () => {
    setLoading(true);
    const response = await fetchSmartCart();
    setCart(response.smart_cart);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleGenerateCart}>Generate Smart Cart</button>
      {loading && <p>Loading...</p>}
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SmartCart;