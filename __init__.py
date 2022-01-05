from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home(path):
    return render_template('index.html')

@app.route('/api/mainPage', methods=['POST'])
def sendEmail():
    data = request.get_json
    print("esto"+format(data))


app.run()