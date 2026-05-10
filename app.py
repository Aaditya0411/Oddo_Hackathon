from flask import Flask
from flask_cors import CORS

from routes.trip import trip
from routes.itinerary import itinerary

app = Flask(__name__)

CORS(app, origins=["https://traveloop-tau-ebon.vercel.app"])
app.register_blueprint(trip)
app.register_blueprint(itinerary)

@app.route("/")
def home():

    return {
        "message": "Traveloop Backend Running"
    }

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)