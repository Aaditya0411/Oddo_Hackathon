from flask import Blueprint, request
from database.db import db

itinerary = Blueprint("itinerary", __name__)

# Save itinerary
@itinerary.route("/itinerary", methods=["POST"])
def save_itinerary():

    data = request.json

    db.itinerary.insert_one(data)

    return {
        "message": "Itinerary Saved"
    }

# Get itinerary
@itinerary.route("/itinerary", methods=["GET"])
def get_itinerary():

    itinerary_data = list(
        db.itinerary.find({}, {"_id": 0})
    )

    return itinerary_data