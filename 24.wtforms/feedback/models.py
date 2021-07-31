from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)


                    #MODELS



class User(db.Model):

    __tablename__ = "users"

    username = db.Column(db.String(20), primary_key=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(50), nullable = False)
    first_name = db.Column(db.String(30), nullable = False)
    last_name = db.Column(db.String(30), nullable = False)

    @classmethod
    def retrieve_hash_pass(cls, password):
        """Generate a utf8 hashed password to register with"""

        hashed_pass = bcrypt.generate_password_hash(password)
        utf8_hashed_pass = hashed_pass.decode('utf8')

        return cls(password=utf8_hashed_pass)
    
    @classmethod
    def authenticate(cls, username, password):
        """Check if User exists then authenticate it against hashed password
        
        If Username exists and hashed password matches, return it"""

        u = User.query.filter_by(username=username).first()

        if u and bcrypt.check_password_hash(u.password, password):
            # return user instance
            return u
        else:
            return False
    
    @classmethod
    def get_user_info(cls, username):
        """Retrieves user info"""

        return User.query.filter_by(username=username).first()
        
class Feedback(db.Model):

    __tablename__ = "feedback"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(), nullable=False)
    username = db.Column(db.String(150), db.ForeignKey('users'))
    
    user = db.relationship('User', backref="feedback")

    @classmethod
    def get_feedback(cls, username):
        """Retrieves user info"""

        u = User.query.filter_by(username=username).first()

        return u.feedback


