#To create tables, ipython, %run app.py, db.create_all()

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)



                                        #MODELS



class Pet(db.Model):
    """Pets"""

    __tablename__ = "pets"
    id = db.Column(db.Integer(),autoincrement=True, primary_key=True)
    name = db.Column(db.Text(),nullable = False)
    species = db.Column(db.Text(),nullable = False)
    photo = db.Column(db.Text(),nullable = True)
    age = db.Column(db.Integer(),nullable = True)
    notes = db.Column(db.Text(),nullable = True)
    available = db.Column(db.Boolean, default=True)