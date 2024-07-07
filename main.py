import os
from http import HTTPStatus

import requests
from flask import Flask, jsonify, render_template, request, send_from_directory

import tempdb

HOST = os.getenv("HOST", "0.0.0.0")
PORT = os.getenv("PORT", 5000)
DEBUG = os.getenv("DEBUG", "true") == "true"
TEMPLATE_FOLDER = os.getenv("TEMPLATE_FOLDER", "cloudpyit/build/")
STATIC_FOLDER = os.getenv("STATIC_FOLDER", "cloudpyit/build/")

app = Flask(__name__, template_folder=TEMPLATE_FOLDER, static_folder=STATIC_FOLDER)


# Serve React App
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    print("Requesting path", path)
    if path != "":
        if path.startswith("images") and os.path.exists(app.root_path + "/" + path):
            return send_from_directory(app.root_path, path), HTTPStatus.OK
        if os.path.exists(app.static_folder + "/" + path):
            return send_from_directory(app.static_folder, path), HTTPStatus.OK
    else:
        return send_from_directory(app.static_folder, "index.html"), HTTPStatus.OK


@app.get("/students/count")
def get_students_count():
    return jsonify({"count": 100}), HTTPStatus.OK


@app.get("/courses/count")
def get_courses_count():
    return jsonify({"count": 100}), HTTPStatus.OK


@app.get("/trainers/count")
def get_trainers_count():
    return jsonify({"count": 100}), HTTPStatus.OK


@app.get("/events/count")
def get_events_count():
    return jsonify({"count": 100}), HTTPStatus.OK


@app.get("/courses")
def get_all_courses():
    return jsonify({"courses": tempdb.available_courses}), HTTPStatus.OK


@app.get("/courses/popular")
def get_all_popular_courses():
    return jsonify(tempdb.popular_courses), HTTPStatus.OK


@app.get("/vacancy")
def get_all_vacancy():
    return jsonify({"vacancies": tempdb.vacancies}), HTTPStatus.OK


@app.post("/contact-form")
def submit_contact_form():
    data = request.get_json()
    data["Subject"] = "Contact me request"
    send_simple_message(data)
    return jsonify({"msg": "Success"}), HTTPStatus.ACCEPTED


@app.post("/subscription")
def subscribe_new_letter():
    data = request.get_json()
    data["Subject"] = "Subscription request"
    print("Subscription data", data)
    send_simple_message(data)
    return jsonify({"msg": "Success"}), HTTPStatus.ACCEPTED


@app.post("/api/login")
def user_login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    # Simulating user authentication
    if username == "admin" and password == "password":
        return (
            jsonify(
                {
                    "status": "success",
                    "message": "Logged in successfully",
                    "to": "/client/home",
                }
            ),
            HTTPStatus.OK,
        )
    return (
        jsonify({"status": "error", "message": "Invalid credentials"}),
        HTTPStatus.UNAUTHORIZED,
    )


@app.post("/api/register")
def user_register():
    data = request.get_json()
    return (
        jsonify({"status": "success", "message": "User created", "to": "/auth/login"}),
        HTTPStatus.ACCEPTED,
    )


def send_simple_message(user_data):
    DOMAIN = "sandboxc388a3948d9e469a8e90a27adafed28f.mailgun.org"
    API_KEY = os.getenv("SINCH_MAIL_API_KEY")
    return requests.post(
        f"https://api.mailgun.net/v3/{DOMAIN}/messages",
        auth=("api", API_KEY),
        data={
            "from": f"Excited User <mailgun@{DOMAIN}>",
            "to": ["avireni.chandanchandu43657@gmail.com"],
            "subject": user_data["Subject"],
            "text": "\n".join(
                [f"{key:20s} {value:20s}" for key, value in user_data.items()]
            ),
        },
    )


if __name__ == "__main__":
    if DEBUG:
        from flask_cors import CORS

        CORS(app)  # This will enable CORS for all routes
    app.run(host=HOST, debug=DEBUG, port=PORT)
