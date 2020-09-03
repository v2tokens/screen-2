from os import environ

from flask import Flask, jsonify

from pyautogui import click

app = Flask(__name__)


@app.route("/ok")
def isup():
    return jsonify(success=True)


@app.route("/")
def _click():
    click()
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0")
