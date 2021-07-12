from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
def connect_db(app):
    db.app = app
    db.init_app(app)

#MODELS

class User(db.Model):
    """USERS"""
    __tablename__ = 'users'

    def __repr__(self):
        """Show User Info"""
        u = self
        return f'<User (first_name: {u.first_name}, last_name: {u.last_name}>'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)