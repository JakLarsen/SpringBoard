"""SEED FILE FOR USERS"""

from models import User, db
from app import app

#create all tables
db.drop_all()
db.create_all()

#If table isn't empty, empty it
User.query.delete()

#add users
jake = User (first_name = "Jake", last_name = "Larsen")
molly = User (first_name = "Molly", last_name = "Larsen")
sdeven = User (first_name = "Sdeven", last_name = "Sdephensen")
bob = User (first_name = "Bob", last_name = "Bobertson")

db.session.add(jake)
db.session.add(molly)
db.session.add(sdeven)
db.session.add(bob)

db.session.commit()