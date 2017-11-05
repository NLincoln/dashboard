from flask import Flask
from flask import jsonify
from news import get_news
app = Flask(__name__)
news = get_news()

#print(weather)
@app.route('/')
def homepage():
    return jsonify(news)

if __name__ == '__main__':
    app.run(use_reloader=True, debug=True)
