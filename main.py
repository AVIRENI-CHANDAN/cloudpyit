import os

from flask import Flask, jsonify, render_template, send_from_directory

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
            return send_from_directory(app.root_path, path)
        if os.path.exists(app.static_folder + "/" + path):
            return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


@app.get("/students/count")
def get_students_count():
    return jsonify({"count": 100})


@app.get("/courses/count")
def get_courses_count():
    return jsonify({"count": 100})


@app.get("/trainers/count")
def get_trainers_count():
    return jsonify({"count": 100})


@app.get("/events/count")
def get_events_count():
    return jsonify({"count": 100})


@app.get("/courses")
def get_all_courses():
    return jsonify({"courses": tempdb.available_courses})


@app.get("/courses/popular")
def get_all_popular_courses():
    return jsonify(tempdb.popular_courses)


if __name__ == "__main__":
    if DEBUG:
        from flask_cors import CORS

        CORS(app)  # This will enable CORS for all routes
    app.run(host=HOST, debug=DEBUG, port=PORT)
