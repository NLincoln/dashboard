import requests


def _get_base_params():
    return {
        'zip': '65401,us',
        'appid': '3be30619a3214220d72c3a697af26f5b',
        'units': 'imperial'
    }


def weather_outside():
    """
    Get the weather for today and for tomorrow
    """
    current_weather = requests.get(
        'http://api.openweathermap.org/data/2.5/weather',
        params=_get_base_params()
    ).json()

    forecast_params = _get_base_params()
    forecast_params['cnt'] = 8

    forecast_weather = requests.get(
        'http://api.openweathermap.org/data/2.5/forecast',
        params=forecast_params
    ).json()

    weather = current_weather.copy()
    weather.update(forecast_weather)

    return weather
