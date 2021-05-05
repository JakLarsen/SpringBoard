from flask_sqlalchemy import SQLAlchemy
from funcs import get_date_time


db = SQLAlchemy()
def connect_db(app):
    db.app = app
    db.init_app(app)

# MODELS

class User(db.Model):


    @classmethod
    def get_all_users(cls):
        return User.query.all()

    def __repr__(self):
        """ Show User Info """

        u = self
        return f'<User id: {u.id}; FN: {u.first_name}; LN: {u.last_name}; IMG: {u.image_url}'

    __tablename__ = 'users'

    id = db.Column(
        db.Integer,
        primary_key = True,
        autoincrement = True
    )
    first_name = db.Column(
        db.String(20),
        nullable = False
    )
    last_name = db.Column(
        db.String(20),
        nullable = False
    )
    image_url = db.Column(
        db.String(500),
        nullable = True,
        default = " "
    )
    
    posts = db.relationship("Post", cascade = "all, delete")


class Post(db.Model):
    """ POST MODEL """

    __tablename__ = 'posts'

    @classmethod
    def get_all_user_posts(cls, user_id):
        return Post.query.filter_by(user_id = user_id)

    id = db.Column(
        db.Integer,
        primary_key = True,
        autoincrement = True
    )
    title = db.Column(
        db.String(50),
        default = 'Untitled'
    )
    content = db.Column(
        db.String(250),
        nullable = False
    )
    created_at = db.Column(
        db.String(20),
        default = get_date_time()
    )
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id')
    )

    # tags = db.relationship('PostTag', backref = "post")
    tags = db.relationship ('Tag', secondary='posts_tags', backref='posts')

class Tag(db.Model):
    """ TAG MODEL """

    __tablename__ = "tags"

    id = db.Column(
        db.Integer,
        primary_key = True,
    )
    name = db.Column(
        db.String(20),
        nullable = False,
        unique = True
    )

    # posts = db.relationship('PostTag', backref = "tag")
    

class PostTag(db.Model):
    """ POST TAG MODEL"""

    __tablename__ = "posts_tags"

    post_id = db.Column(
        db.Integer,
        db.ForeignKey("posts.id"),
        primary_key = True
    )
    tag_id = db.Column(
        db.Integer,
        db.ForeignKey("tags.id"),
        primary_key = True
    ) 
    
