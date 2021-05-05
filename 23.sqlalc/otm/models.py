#To create tables, ipython, %run app.py, db.create_all()

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


# MODELS

class Department(db.Model):
    """ Department. OTM -> Employees """

    __tablename__ = "departments"

    dept_code = db.Column(db.Text, primary_key = True)
    dept_name = db.Column(db.Text,nullable = False,unique = True)
    phone = db.Column(db.Text)

    def __repr__(self):
        return f'<Department dept_code: {self.dept_code}, dept_name: {self.dept_name}, phone: {self.phone}'


class Employee(db.Model):
    """ Employee. Many employees to a department """

    __tablename__ = "employees"

    id = db.Column(db.Integer,primary_key = True,autoincrement = True)
    name = db.Column(db.Text,nullable = False,unique = True)
    state = db.Column(db.Text,nullable = False,default = 'CA')
    dept_code = db.Column(db.Text, db.ForeignKey('departments.dept_code'))

    #gives us the ability to get the corresponding department data for an employee of a given department
    dept = db.relationship('Department', backref='employees')
    assignments = db.relationship('EmployeeProject', backref='employee')
    #through relationship from Employee to Project
    projects = db.relationship('Project', secondary='employees_projects', backref="employees")

    def __repr__(self):
        return f'<Employee name: {self.name}, state: {self.state}, dept_code: {self.dept_code}'

class Project(db.Model):

    __tablename__ = "projects"

    project_code = db.Column(db.Text, primary_key = True)
    project_name = db.Column(db.Text, nullable = False, unique = True)

    assignments = db.relationship('EmployeeProject', backref='project')

class EmployeeProject(db.Model):

    __tablename__ = "employees_projects"

    emp_id =  db.Column(db.Integer, db.ForeignKey('employees.id'), primary_key = True)
    project_code =  db.Column(db.Text, db.ForeignKey('projects.project_code'), primary_key = True)
    role = db.Column(db.Text)

    


def get_directory():
    #Makes a lot more queries and is slower
    all_emps = Employee.query.all()
    for emp in all_emps:
        if emp.dept is not None:
            print(emp.name, emp.dept.dept_name, emp.dept.phone)
        else:
            print(emp.name)
def get_directory_join():
    #Only getting the actual data here, not the objects so we can't do work on the rest of the object data
    directory = db.session.query(Employee.name, Department.dept_name, Department.phone).join(Department).all()
    for name, department, phone in directory:
        print(name, department, phone)
def get_directory_join_objects():
    #We are getting the full objects here to use as we will
    directory = db.session.query(Employee, Department).join(Department).all()
    for emp, dept in directory:
        print(emp.name, dept.dept_name, dept.phone)
def get_directory_all_join():
    #We are getting the full objects here to use as we will
    directory = db.session.query(Employee, Department).outerjoin(Department).all()
    for emp, dept in directory:
        print(emp.name, dept.dept_name, dept.phone)


