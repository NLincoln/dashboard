import requests

BASE_URL = "https://api.darksky.net/forecast/ff6825ef0d6ec61b27284b5e42013503"

def _get_base_params():
    return {
        'zip': '65401,us',
        'appid': '3be30619a3214220d72c3a697af26f5b',
        'units': 'imperial'
    }


def weather_outside(lat, lng):
    weather = requests.get(
        "{BASE_URL}/{lat},{lng}".format(BASE_URL=BASE_URL, lat=lat, lng=lng)
    ).json()

    return weather
