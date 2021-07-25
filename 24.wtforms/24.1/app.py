from flask import Flask, request, render_template, redirect, flash, session
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db, User
from forms import AddSnackForm
import sys

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "wadawfnoawnfgar"


connect_db(app)

@app.route("/")
def home_page():
    """Show Home Page"""
    return render_template("home.html")

@app.route('/snacks/new', methods=["GET","POST"])
def add_snack():
    form = AddSnackForm()

    if form.validate_on_submit():
        #is this a post request AND csrf token is there
        name = form.name.data
        price = form.price.data
        session['name'] = name
        session['price'] = price
        flash(f"New snack created. Name: {name}, price is ${price}")
        return redirect('/')
    else:
        return render_template("add_snack_form.html", form = form)

# @app.route('/yep')
# def noty():
#     name = session.get('name', None)
#     return render_template("yep.html", name = name)