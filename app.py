from os import environ

from flask import Flask, jsonify

# NOTE(decentral1se): some black magic to get the RPI happy
environ["DISPLAY"] = ":0"
environ["XAUTHORITY"] = "/home/decentral1se/.Xauthority"

from pyautogui import click

app = Flask(__name__)


@app.route("/")
def _click():
    click()
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0")
