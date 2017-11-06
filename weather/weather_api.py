from flask import Flask, jsonify, request, abort
from weather import weather_outside

app = Flask(__name__)

@app.route('/')
def homepage():
    lat, lng = request.args.get('lat'), request.args.get('lng')
    if not lat or not lng:
        abort(400)
    return jsonify(weather_outside(lat, lng))

if __name__ == '__main__':
    app.run(use_reloader=True, debug=True, host='0.0.0.0', port=4000)
