from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()
def connect_db(app):
    db.app = app
    db.init_app(app)

# MODELS

class User(db.Model):

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
        default = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49917726%2Fretrieving-default-image-all-url-profile-picture-from-facebook-graph-api&psig=AOvVaw1vz-puhdp66825h6qNNAkp&ust=1618669682429000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiNuc78gvACFQAAAAAdAAAAABAD"
    )
