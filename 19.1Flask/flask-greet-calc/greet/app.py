from flask import Flask, request

app = Flask(__name__)

# /welcome
# Returns “welcome”
@app.route('/welcome')
def welcome():
    return "welcome"

# /welcome/home
# Returns “welcome home”
@app.route('/welcome/home')
def welcome_home():
    return "welcome home"

@app.route('/welcome/back')
def welcome_back():
    return "welcome back"


# /welcome/back
# Return “welcome back”

