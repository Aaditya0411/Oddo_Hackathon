from flask import Flask
from flask_cors import CORS

from routes.trip import trip
from routes.itinerary import itinerary

app = Flask(__name__)

CORS(app)

app.register_blueprint(trip)
app.register_blueprint(itinerary)

@app.route("/")
def home():

    return {
        "message": "Traveloop Backend Running"
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)