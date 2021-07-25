from flask import Flask, request, jsonify, render_template, redirect
from models import db, connect_db, Cupcake


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True\

connect_db(app)

@app.route('/')
def show_home():
    """Render Home Page"""

    cupcakes = Cupcake.query.all()
    return render_template('index.html', cupcakes = cupcakes)

@app.route('/api/cupcakes')
def show_all_cupcakes():
    """ Retrieve JSON for all cupcakes"""

    cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]  
    return jsonify(cupcakes = cupcakes)

@app.route('/api/cupcakes/<int:id>')
def show_cupcake(id):
    """Retrieve JSON for a specific cupcake at ID"""

    cupcake = Cupcake.query.get_or_404(id)
    return jsonify(cupcake.serialize())

@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    """Create a Cupcake"""

    new_cupcake = Cupcake(
        flavor=request.json['flavor'], 
        size=request.json['size'], 
        rating=request.json['rating'],
        image=request.json['image']
        )

    db.session.add(new_cupcake)
    db.session.commit()

    response_json = jsonify(cupcake=new_cupcake.serialize())
    return (response_json, 201)


@app.route('/api/cupcakes/<int:id>', methods=["PATCH"])
def update_cupcake(id):
    """Updates a particular cupcake and responds w/ JSON of that updated cupcake"""

    cupcake = Cupcake.query.get_or_404(id)
    cupcake.flavor = request.json.get('flavor', cupcake.flavor)
    cupcake.size = request.json.get('size', cupcake.size)
    cupcake.rating = request.json.get('rating', cupcake.rating)
    cupcake.image = request.json.get('image', cupcake.image)

    db.session.commit()

    return jsonify(cupcake=cupcake.serialize())


@app.route('/api/cupcakes/<int:id>', methods=["DELETE"])
def delete_cupcake(id):
    """Deletes a particular cupcake"""

    cupcake = Todo.query.get_or_404(id)
    
    db.session.delete(cupcake)
    db.session.commit()

    return jsonify(message="deleted")