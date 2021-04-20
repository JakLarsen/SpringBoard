from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db, User

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = "wadawfnoawnfga"
app.config['DEBUG_TB_INTERECEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home_page():
    """REDIRECTS TO SHOW USERS"""

    return redirect('/users')

@app.route('/users')
def show_users():
    """ SHOWS USERS """

    users = User.query.all()
    return render_template('users.html', users = users)

@app.route('/users/<int:user_id>')
def show_user_details(user_id):
    """ Shows user details """

    user = User.query.get(user_id)
    return render_template('details.html', user = user) 

@app.route('/users/new')
def add_user_form():
    """ ADD A USER TO LIST """

    users = User.query.all()
    return render_template('add_new.html', users = users)

@app.route('/users/add', methods=['POST'])
def add_user_post():
    """ SUBMIT POST AND REDIRECT BACK TO USERS """

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    image_url = request.form['img']

    new_user = User(first_name = first_name, last_name = last_name, image_url = image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect('/users')

@app.route('/users/<int:user_id>/edit')
def edit_user_form(user_id):
    """SHOW EDIT USER FORM"""

    user = User.query.get(user_id)
    return render_template('edit.html', user = user)

@app.route('/users/<int:user_id>/edit', methods=['POST'])
def edit_user_commit(user_id):
    """SHOW EDIT USER FORM"""

    first_name = request.form['first_name']
    last_name = request.form['last_name']
    img = request.form['img']

    user = User.query.get(user_id)
    user.first_name = first_name
    user.last_name = last_name
    user.image_url = img

    db.session.add(user)
    db.session.commit()
    
    return redirect('/users')


@app.route('/users/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    """ DELETE USER """

    user_to_delete = User.query.get(user_id)
    db.session.delete(user_to_delete)
    db.session.commit()

    return redirect('/users')







