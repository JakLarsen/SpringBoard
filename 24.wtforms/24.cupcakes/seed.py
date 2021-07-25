from models import db, connect_db, Cupcake
from app import app

db.drop_all()
db.create_all()

cupcakes = [
    Cupcake(flavor = "Vanilla", size = "Large", rating = 67.67, image='https://hips.hearstapps.com/delish/assets/18/07/1518475314-vanilla-cupcake-horizontal-.jpg'),
    Cupcake(flavor = "Chocolate", size = "Medium", rating = 87.67),
    Cupcake(flavor = "Swirl", size = "Large", rating = 92.67),
    Cupcake(flavor = "Flower", size = "Small", rating = 100.00)
]

db.session.add_all(cupcakes)
db.session.commit()