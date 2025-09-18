import React from 'react';
import SmartCart from './SmartCart';

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1 role="heading" aria-level="1">🛒 Predict and Pick</h1>
      </header>
      <section>
        <SmartCart />
      </section>
    </main>
  );
}

export default App;
