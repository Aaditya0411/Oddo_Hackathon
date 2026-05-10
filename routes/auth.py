from flask import Blueprint, request
from database.db import db

auth = Blueprint("auth", __name__)

# signup
@auth.route("/signup", methods=["POST"])
def signup():

    data = request.json

    user = {
        "name": data["name"],
        "email": data["email"],
        "password": data["password"]
    }

    db.users.insert_one(user)

    return {
        "message": "User Saved Successfully"
    }

# login
@auth.route("/login", methods=["POST"])
def login():

    data = request.json

    user = db.users.find_one({
        "email": data["email"],
        "password": data["password"]
    })

    if user:

        return {
            "message": "Login Successful"
        }

    else:

        return {
            "message": "Invalid Email or Password"
        }