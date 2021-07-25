
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

            #MODELS

class Cupcake(db.Model):
    __tablename__ = "cupcake"

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    flavor = db.Column(db.String(30), nullable = False)
    size = db.Column(db.String(30), nullable = False)
    rating = db.Column(db.Float, nullable = False)
    image = db.Column(db.String(), default = 'https://tinyurl.com/demo-cupcake')

    def serialize(self):
        """Return a dicitonary representation that we can turn into JSON"""
        
        return{
            'id': self.id,
            'flavor': self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image': self.image
        }
