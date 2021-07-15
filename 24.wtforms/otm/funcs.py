
from models import Department, db

def getDeptartmentChoices():
    depts = db.session.query(Department.dept_code, Department.dept_name)

    choices = []
    for value in depts:
        print(value, flush = True)
        choices.append(value)
    return choices
