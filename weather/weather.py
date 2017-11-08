import requests
import redis
import json

REDIS_PREFIX = 'weather:'
REDIS_EXPIRE = 1 * 60
redis_connection = redis.StrictRedis(host='redis', port=6379)

def _serialize_redis(lat, lng):
    return "{}:{}/{}".format(REDIS_PREFIX, lat, lng)

def _get(lat, lng):
    redis_key = _serialize_redis(lat, lng)
    if redis_connection.exists(redis_key):
        weather = redis_connection.get(redis_key)
        return json.loads(weather)
    else:
        weather = requests.get(
            "{BASE_URL}/{lat},{lng}".format(BASE_URL=BASE_URL, lat=lat, lng=lng)
        ).json()
        redis_connection.setex(_serialize_redis(lat, lng), REDIS_EXPIRE, json.dumps(weather))
        return weather


BASE_URL = "https://api.darksky.net/forecast/ff6825ef0d6ec61b27284b5e42013503"

def weather_outside(lat, lng):
    return _get(lat, lng)
