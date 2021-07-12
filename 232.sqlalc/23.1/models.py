from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)



#MODELS

class Turtle(db.Model):
    """Turtles"""
    __tablename__ = "turtles"

    def __repr__(self):
        """Info about Turtle"""
        t = self
        return f'<Turtle "name: {t.name}, typer: {t.typer}, hunger: {t.hunger}>'

    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    name = db.Column(db.String(50),nullable = False,unique=True)
    typer = db.Column(db.String(30), nullable = True)
    hunger = db.Column(db.Integer, nullable = False, default = 20)

    #ipython...%run app.py...db.create_all() to create our table
    #if you have to change the model structure, we can alter a table or delete and remake

