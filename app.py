from os import environ

from flask import Flask

# NOTE(decentral1se): some black magic to get the RPI happy
environ["DISPLAY"] = ":0"
environ["XAUTHORITY"] = "/home/decentral1se/.Xauthority"

from pyautogui import click

app = Flask(__name__)


@app.route("/")
def _click():
    click()
    return "clicked"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
