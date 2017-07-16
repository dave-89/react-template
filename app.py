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
    return json.dumps(request.data)

if __name__ == "__main__":
    app.run(port=5000)
