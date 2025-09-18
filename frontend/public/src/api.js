export async function fetchSmartCart() {
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
  return await response.json();
}