from flask import Flask, request, jsonify
from flask_cors import CORS
from calendar_utils import get_upcoming_events
from weather_utils import get_weather_forecast
from cart_builder import build_smart_cart

app = Flask(__name__)
CORS(app)

@app.route('/smart-cart', methods=['POST'])
def smart_cart():
    data = request.json
    calendar_data = data.get('calendar_events', [])
    location = data.get('location', 'Bengaluru')
    purchase_history = data.get('purchase_history', [])

    events = get_upcoming_events(calendar_data)
    weather = get_weather_forecast(location)
    cart = build_smart_cart(events, weather, purchase_history)

    return jsonify({'smart_cart': cart})

if __name__ == '__main__':
    app.run(debug=True)