import React, { useState } from 'react';
import { fetchSmartCart } from './api';

function SmartCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchSmartCart();
      if (response && Array.isArray(response.smart_cart)) {
        setCart(response.smart_cart);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError('Failed to fetch smart cart. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ marginTop: '1rem' }}>
      <button
        onClick={handleGenerateCart}
        disabled={loading}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Generating...' : 'Generate Smart Cart'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ marginTop: '1rem' }}>
        {cart.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default SmartCart;
