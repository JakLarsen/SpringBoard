from models import db, connect_db, User, Feedback
from app import app

db.drop_all()
db.create_all()

ui= User(username = "123", password="123", first_name="123", last_name="123", email="123@gamil.com")
fbi = Feedback(title="This is a new post", content="I think Flask is alright, but it's confusing at times.", username="123")

db.session.add(ui)
db.session.add(fbi)

db.session.commit()