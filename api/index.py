import sqlite3

from flask import Flask, jsonify, request

app = Flask(__name__)


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
