from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db



                                        #CONFIG



app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pa_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "cooolbeans"
app.config['DEBUG_TB_INTERECEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)



                                        # ROUTES



@app.route('/')
def show_home():
    """Show home page"""
    render_template('home.html')