from flask import Flask, request

app =Flask(__name__)




# Put your app in here.
def add(a, b):
    """Add a and b."""
    return a + b

def sub(a, b):
    """Substract b from a."""
    return a - b

def mult(a, b):
    """Multiply a and b."""
    return a * b

def div(a, b):
    """Divide a by b."""
    return a / b

ourDic = {
    'add': add,
    'sub': sub,
    'mult': mult,
    'div': div
}


# PART 2
@app.route('/math/<op>')
def calc(op):
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = ourDic[op](a,b)
    return f'<h1>Your Result: {result}</h1>'




@app.route('/add')
def add_route():
    a = int(request.args["a"])
    b = int(request.args["b"])
    result = add(a,b)
    return f'<h1>Your Result: {result}</h1>'

@app.route('/sub')
def sub_route():
    a = int(request.args['a'])
    b = int(request.args['b'])
    result = sub(a,b)
    return f'<h1>Your Result: {result}</h1>'

@app.route('/mult')
def mult_route():
    a = int(request.args['a'])
    b = int(request.args['b'])
    result = mult(a,b)
    return f'<h1>Your Result: {result}</h1>'

@app.route('/div')
def div_route():
    a = int(request.args['a'])
    b = int(request.args['b'])
    result = div(a,b)
    return f'<h1>Your Result: {result}</h1>'
