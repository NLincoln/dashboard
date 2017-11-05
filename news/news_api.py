from flask import Flask, jsonify

from news import get_news
app = Flask(__name__)

@app.route('/')
def homepage():
    return jsonify(get_news())

if __name__ == '__main__':
    app.run(use_reloader=True, debug=True, port=4000, host='0.0.0.0')
