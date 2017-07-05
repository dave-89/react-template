from flask import Flask, send_from_directory, request
import json

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    print 'aaa'
    return send_from_directory('public', 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    print path
    return send_from_directory('public', path)

@app.route('/post', methods=['POST'])
def post():
    print request.data
    print type(request.data)
    if type(data) is str:
        data = json.loads(str(request.data))
    else:
        data = request.data
    print data.values()
    print data.values()[0]
    return json.dumps(data.values()[0])

if __name__ == "__main__":
    app.run(port=5000)
