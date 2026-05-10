from flask import Blueprint, request
from database.db import db

trip = Blueprint("trip", __name__)

# Create Trip
@trip.route("/trips", methods=["POST"])
def create_trip():

    data = request.json

    trip_data = {
        "title": data["title"],
        "budget": data["budget"],
        "startDate": data["startDate"],
        "endDate": data["endDate"]
    }

    db.trips.insert_one(trip_data)

    return {
        "message": "Trip Created Successfully"
    }

# Get All Trips
@trip.route("/trips", methods=["GET"])
def get_trips():

    trips = list(db.trips.find({}, {"_id": 0}))

    return trips