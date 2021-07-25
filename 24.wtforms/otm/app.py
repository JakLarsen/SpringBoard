#How to view data from form.is_healthy.data, etc. after raising error and going through debugger, it renders the form and html instead of giving me the object or any information
#How to view data in terminal or git bash - was using print(x, flush=True before but forgot how and not working)
#Flask debugger rendering HTML instead of running python??? Something is broken

#To create tables, ipython, %run app.py, db.create_all()

from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db, Department, Employee, Project, EmployeeProject, Snack, get_directory, get_directory_join, get_directory_join_objects
from forms import AddSnackForm, EmployeeForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "wadawfnoawnfga"
app.config['DEBUG_TB_INTERECEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route("/")
def home_page():
    """Show Home Page"""
    return render_template("home.html")

@app.route('/snacks/new', methods=["GET","POST"])
def add_snack():
    form = AddSnackForm()

    if form.validate_on_submit():
        #is this a post request AND csrf token is there
        name = form.name.data
        price = form.price.data
        session['name'] = name
        session['price'] = price
        snack = Snack(name=name, price=price)
        db.session.add(snack)
        db.session.commit()
        flash(f"New snack created. Name: {name}, price is ${price}")
        return redirect('/')
    else:
        return render_template("add_snack_form.html", form = form)

@app.route('/phones')
def list_phones():
    emps = Employee.query.all()
    return render_template('phones.html', emps = emps)

@app.route('/employees/new', methods=["GET","POST"])
def add_employee():
    """New Employee Form"""

    form = EmployeeForm()

    #Does not work as intended - the individual parts of the tuple work, 
    # but when sent over all of the option values and text displays are the full tuples 
    # instead of splitting the value to the department code and text to the name

    # depts = db.session.query(Department.dept_code, Department.dept_name)
    # print("****************************************", flush= True)
    # print(depts[0], flush= True)
    # print(depts[1], flush= True)
    # print("****************************************", flush= True)
    # print("****************************************", flush= True)
    # form.dept_code.choices = depts
  

    if form.validate_on_submit():
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        emp = Employee(name=name, state=state, dept_code=dept_code)

        db.session.add(emp)
        db.session.commit()

        flash(f"New Employee Created. Name: {name}, State: {state}, Department: {dept_code}")
        return redirect('/')
    else:
        return render_template('new_employee_form.html', form = form)


@app.route("/employees/<int:id>/edit", methods=["GET", "POST"])
def edit_exployee(id):

    emp = Employee.query.get_or_404(id)
    form = EmployeeForm(obj = emp)

    if form.validate_on_submit():
        emp.name = form.name.data
        emp.state = form.state.data
        emp.dept_code = form.dept_code.data
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template("edit_employee_form.html", form = form)
