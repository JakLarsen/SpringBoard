from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db, User, Post
from funcs import get_date_time

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = "wadawfnoawnfga"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
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

    posts = Post.get_all_user_posts(user_id)
    user = User.query.get(user_id)
    return render_template('details.html', user = user, posts = posts) 

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

@app.route('/users/<int:user_id>/add-post')
def add_post_form(user_id):
    """ BRINGS UP ADD POST FORM """

    user = User.query.get(user_id)

    return render_template('add_post.html', user = user)

@app.route('/users/<int:user_id>/create-post', methods=['POST'])
def create_post(user_id):
    """ Submits a Post to database, redirects to the user page """
    
    title = request.form['title']
    content = request.form['content']

    new_post = Post(title = title, content = content, user_id = user_id)

    db.session.add(new_post)
    db.session.commit()

    return redirect(f'/users/{user_id}')

@app.route('/users/<int:user_id>/cancel')
def return_to_user(user_id):
    """Cancels add-post form, returns to user/<user_id>"""

    return redirect(f'/users/{user_id}')

@app.route('/users/<int:user_id>/posts/<int:post_id>')
def show_post(user_id, post_id):
    """ retrieves post based on user and post ids """

    user = User.query.get(user_id)
    post = Post.query.get(post_id)

    return render_template('post.html', user = user, post = post )

@app.route('/users/<int:user_id>/posts/<int:post_id>/delete', methods=['POST'])
def delete_post(user_id, post_id):
    """ deletes a post and redirects to user detail page """

    post_to_delete = Post.query.get(post_id)
    db.session.delete(post_to_delete)
    db.session.commit()

    return redirect(f'/users/{user_id}')

@app.route('/users/<int:user_id>/posts/<int:post_id>/edit')
def edit_post(user_id, post_id):
    """ brings up edit form for a post """

    user = User.query.get(user_id)
    post = Post.query.get(post_id)

    return render_template(f'edit_post.html', user = user, post = post)

@app.route('/users/<int:user_id>/posts/<int:post_id>/commit-edit', methods = ['POST'])
def commit_post_edit(user_id, post_id):
    """ Commits a post edit and redirects to that updated post page """

    title = request.form['title']
    content = request.form['content']
    created_at = get_date_time()

    post = Post.query.get(post_id)
    post.title = title
    post.content = content
    post.created_at = created_at

    db.session.add(post)
    db.session.commit()

    return redirect(f'/users/{user_id}/posts/{post_id}')

