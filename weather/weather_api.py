from flask import Flask, jsonify
from main import weather_outside

app = Flask(__name__)

@app.route('/')
def homepage():
    return jsonify(weather_outside())

if __name__ == '__main__':
    app.run(use_reloader=True, debug=True, host='0.0.0.0', port=4000)
