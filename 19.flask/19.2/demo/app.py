from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

from random import randint, choice, sample

app = Flask(__name__)

# the toolbar is only enabled in debug mode:
app.debug = True

# set a 'SECRET_KEY' to enable the Flask session cookies
app.config['SECRET_KEY'] = 'coolbeans'

toolbar = DebugToolbarExtension(app)

@app.route('/hello')
def say_hello():
    """Show Hello Page"""
    return render_template("hello.html")

# LUCKY NUMBER VARIABLE PRACTICE 
@app.route('/lucky')
def lucky():
    """Lucky Num Page"""
    lucky_num = randint(1,10)

    return render_template("lucky.html",lucky_num = lucky_num, msg = "You are so lucky!")


# GREET DEMO
COMPLIMENTS = [
    "cool",
    "clever",
    "tenacious",
    "wonderful",
    "enchanting"
]

@app.route('/form')
def show_form():
    return render_template('form.html')

@app.route('/form-2')
def show_form_2():
    return render_template("form_2.html")

@app.route('/greet-2')
def get_gretting_2():
    username = request.args['username']
    wants_compliments = request.args.get('wants_compliments')
    nice_things = sample(COMPLIMENTS,3)
    return render_template("greet_2.html", username = username, wants_compliments = wants_compliments, nice_things = nice_things)


@app.route('/greet')
def get_greeting():
    username = request.args['username']
    # greeting = COMPLIMENTS[randint(0,2)]
    compliment = choice(COMPLIMENTS)
    return render_template("greet.html", username = username, compliment = compliment)

#Spell
@app.route('/spell/<word>')
def spell_word(word):
    return render_template("spell.html", word = word)
