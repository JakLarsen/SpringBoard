from flask_sqlalchemy import SQLAlchemy


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

