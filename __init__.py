from flask import Flask, render_template, request, jsonify
from sendEmail import emailTo, get_credentials

credentials = get_credentials()
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home(path):
    return render_template('index.html')

@app.route('/api/mainPage', methods=['POST'])
def sendEmail():
    data = request.data.decode('UTF-8')
    emailTo(str(data), credentials)
    return {"response": True}

app.run()