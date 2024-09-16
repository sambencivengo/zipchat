import sqlite3

from flask import Flask, g, jsonify, request

app = Flask(__name__)

DATABASE = "../db.SQlite"


def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/submit", methods=["POST"])
def submission():
    firstName = request.form.get("firstName")
    lastName = request.form.get("lastName")
    availability = request.form.getlist("availability")
    data = {"firstName": firstName, "lastName": lastName, "availability": availability}
    return jsonify(data)
