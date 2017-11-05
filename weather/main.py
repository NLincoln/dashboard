import requests

def weather_outside():
    defKey = '3be30619a3214220d72c3a697af26f5b'
    zipC = '65401,us'

    #get current weather
    current_Param = {'zip': zipC, 'appid': defKey, 'units': 'imperial'}
    r = requests.get('http://api.openweathermap.org/data/2.5/weather', params=current_Param)
    current_W = r.json()

    #get weather for next 24 hours
    forecast_Param = {'zip':zipC,'appid':defKey,'units':'imperial','cnt':8}
    r = requests.get('http://api.openweathermap.org/data/2.5/forecast',params=forecast_Param)
    forecast_W = r.json()

    #print(current_W)
    #temp, temp_min, temp_max, humidity, wind speed
    #for i in range(len(forecast_W['list'])):
     #   print(forecast_W['list'][i],'\n')
    weather = current_W.copy()
    weather.update(forecast_W)
    #print(weather['weather'])
    #current weather type == weather['weather']['main']
            #weather['weather']['description']
    #current temp w max and min == weather['main']
    return weather
