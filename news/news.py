import requests

def get_news():
    defKey = 'e0ed67df6eb840d2a0222de3de3e313b'
    nyt_params = {'api-key':defKey}

    #get most shared news
    r = requests.get('http://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/1.json?',nyt_params)
    r = r.json()
    theNews = []
    for i in range(5):
        theNews.append(r['results'][i])

    #get most chared tech news
    q = requests.get('http://api.nytimes.com/svc/mostpopular/v2/mostshared/technology/1.json?', nyt_params)
    q = q.json()
    for b in range(5):
        theNews.append(q['results'][i])

    return theNews
