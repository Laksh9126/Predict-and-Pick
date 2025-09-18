export async function fetchSmartCart() {
  try {
    const response = await fetch('http://localhost:5000/smart-cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        calendar_events: [
          { title: 'Dinner with friends' },
          { title: 'Trip to Mysore' }
        ],
        location: 'Bengaluru',
        purchase_history: ['rice', 'dal', 'bread']
      })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.smart_cart || !Array.isArray(data.smart_cart)) {
      throw new Error('Invalid response format');
    }

    return data;
  } catch (error) {
    console.error('Fetch SmartCart failed:', error.message);
    return { smart_cart: [] }; // fallback to empty cart
  }
}
