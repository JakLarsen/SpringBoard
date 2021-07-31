from forms import RegistrationForm, LoginForm, FeedbackForm
from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Feedback

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///feedback"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

connect_db(app)

toolbar = DebugToolbarExtension(app)



                    # VIEW FUNCTIONS



@app.route('/')
def show_home():
    """Render Homepage"""
    return redirect('/register')

@app.route('/register', methods=["GET", "POST"])
def create_user():
    """Registration form to create a User"""

    form = RegistrationForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        first_name = form.first_name.data
        last_name = form.last_name.data
        email = form.email.data

        hashed_pass = User.retrieve_hash_pass(password).password
        user = User(username = username, password = hashed_pass, first_name = first_name, last_name = last_name, email = email)
       
        db.session.add(user)
        db.session.commit()

        session['username'] = user.username

        return redirect(f'/users/{username}')
    else: 
        return render_template('register.html', title = "Register", form = form)

@app.route('/login', methods=["GET", "POST"])
def login():
    """Login form"""

    form = LoginForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)

        if user:
            session["username"] = user.username
            return redirect(f'/users/{username}')
        else:
            form.username.errors = ["Bad name/password"]
    
    return render_template('login.html', title = 'Login', form = form)

@app.route('/logout')
def logout_user():
    """Take username out of session to logout"""

    session.pop('username')

    return redirect('/')

@app.route('/users/<username>', methods=["GET", "POST"] )
def user_page(username):
    """LOGGED IN"""

    if "username" not in session:
        flash("You must be logged in to view!")
        return redirect("/")

    else:
        user = User.get_user_info(username)
        feedback = user.feedback
        return render_template('user_page.html', user = user, feedback = feedback, title = f"Welcome, {username}!")

@app.route('/users/<username>/delete', methods=["GET", "POST"])
def delete_user(username):
    """DELETE USER AND THEIR FEEDBACK FROM DB AND DOM"""

    user = User.query.get_or_404(username)

    if user.username == session['username']:
        for post in user.feedback:
            db.session.delete(post)
        db.session.delete(user)
        db.session.commit()

        session.pop('username')

    return redirect('/')

@app.route('/users/<username>/feedback/add', methods=["GET", "POST"])
def add_feedback(username):
    """Either renders form to add feedback (GET) or posts form submission"""

    if "username" not in session:
        flash("Please login first!")
        return redirect('/')

    form = FeedbackForm()

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        newFeedback = Feedback(title = title, content = content, username = username)

        db.session.add(newFeedback)
        db.session.commit() 
        flash('Tweet Created!')

        return redirect(f'/users/{username}')

    return render_template('feedback_form.html', form = form, username = username)

@app.route('/feedback/<id>/update', methods=["GET", "POST"])
def update_feedback(id):
    """Render form to update feedback and post submission"""

    if "username" not in session:
        flash("Please login first!")
        return redirect('/')

    our_feedback = Feedback.query.get_or_404(id)
    our_user = our_feedback.user.username

    #if the feedback not by person logged in, send error, redirect to /
    if our_user != session['username']:
        flash("Wrong User!")
        return redirect('/')
    
    form = FeedbackForm()
    
    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data
        our_feedback.title = title
        our_feedback.content = content

        db.session.commit()

        return redirect(f'/users/{our_user}')

    return render_template('edit_feedback.html', form=form, feedback = our_feedback)


@app.route('/feedback/<id>/delete', methods=["POST"])
def delete_feedback(id):
    """DELETE FEEDBACK FROM DB AND DOM"""

    our_feedback = Feedback.query.get_or_404(id)
    our_user = our_feedback.user.username

    if "username" not in session or our_user != session['username']:
        flash("Please sign in first or make sure you are the correct User!")
        return redirect('/')

    if our_user == session['username']:
        
        db.session.delete(our_feedback)
        db.session.commit()

    return redirect(f'/users/{our_user}')

        
