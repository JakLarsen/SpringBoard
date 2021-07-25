from models import Pet, db
from app import app

#create all new tables
db.drop_all()
db.create_all()

p1 = Pet(name="Juicies", species="Quakka", photo="", age="473000", notes="Drools a bit on the left side", available=True)
p2 = Pet(name="Monkjelo", species="Monke", photo="", age="4", notes="Be right back", available=False)
p3 = Pet(name="Lasquirrel", species="Squirrel", photo="", age="15", notes="Israel ftw", available=True)

db.session.add_all([p1, p2, p3])
db.session.commit()
