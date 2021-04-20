from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


# MODELS GO BELOW!

class Pet(db.Model):

    @classmethod
    def get_by_species(cls, species):
        return cls.query.filter_by(species=species).all()

    @classmethod
    def get_hungry(cls):
        return cls.query.filter(Pet.hunger >= 50).all()

    def __repr__(self):
        """ Show PET Info """

        u = self
        return f'<PET id: {u.id}; Name: {u.name}; Species: {u.species}; Hunger: {u.hunger}'


    __tablename__ = 'pets'

    id = db.Column(
        db.Integer,
        primary_key = True,
        autoincrement = True
    )
    name = db.Column(
        db.String(50),
        nullable = False,
        unique = True
    )
    species = db.Column(
        db.String(30),
        nullable = True
    )
    hunger = db.Column(
        db.Integer,
        nullable = False,
        default = 20
    )


    def greet(self):
        return f'{self.name}, says hi!'
    
    def feed(self, amount = 20):
        """Update hunger based off out amount fed"""
        
        self.hunger -= amount
        self.hunger = max(self.hunger, 0)


