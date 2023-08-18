from flask import Flask
from Json.Json import JsonKnowledge
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/Knowledge")
def Get():
    return JsonKnowledge().Get()

if __name__ == "__main__":
    app.run()