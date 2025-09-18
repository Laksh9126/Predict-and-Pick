import requests

def get_weather_forecast(city):
    API_KEY = 'your_openweather_api_key'
    url = f'https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric'
    response = requests.get(url)
    data = response.json()

    forecast = []
    for item in data['list'][:5]:
        temp = item['main']['temp']
        weather = item['weather'][0]['main'].lower()
        if 'rain' in weather or temp < 20:
            forecast.append('comfort food')
    return forecast