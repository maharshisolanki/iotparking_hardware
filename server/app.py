from flask import Flask
from firebase import firebase  
from flask_cors import CORS

firebase = firebase.FirebaseApplication('https://iot-parking-5af2d.firebaseio.com/', None)  

app = Flask(__name__)
CORS(app)

@app.route("/maninagar/<basement>/<id>/<value>")
def enableDisable(basement,id,value):
    firebase.put('/slots/maninagr/'+ basement, id, int(value))  
    return "done"

app.run(host= '0.0.0.0',debug=True)